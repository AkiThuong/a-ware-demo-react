import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { google } from "googleapis";
// import credentials from "./ai-chatbot-training-7796cf9d571e.json" assert { type: "json" };
import keys from "./ai-chatbot-training-7796cf9d571e.json" assert { type: "json" };
import cors from "cors";
import multer from "multer";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const app = express();
app.use(bodyParser.json());
app.use(cors());

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);
client.authorize(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Connected to Google Sheets API!");
  }
});

const gsapi = google.sheets({ version: "v4", auth: client });

async function loadSheet(sheetID, sheetName) {
  const spreadsheetId = sheetID;
  const response = await gsapi.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName, // replaced with your Sheet name followed by an exclamation mark
  });

  return response.data.values; // Return the values from the response
}

async function loadContext(sheetID, languageCode) {
  const sheetName = "Prompt";
  const response = await loadSheet(sheetID, sheetName);

  // Find the index of the selected language
  const languageIndex = response[0].indexOf(languageCode);
  if (languageIndex === -1) {
    throw new Error(`language code ${languageCode} not found in the sheet.`);
  }

  const prompt = response
    .slice(1) // Skip the header row
    .reduce((acc, row) => {
      const command = row[1];
      const value = row[languageIndex];
      acc[command] = value; // Constructing the object
      return acc;
    }, {}); // Initialize the accumulator as an empty object

  // console.log("Prompt: ", JSON.stringify(prompt, null, 2));
  return prompt;
}

async function loadUIText(sheetID, sheetName, languageCode) {
  const response = await loadSheet(sheetID, sheetName);

  // Find the index of the selected language
  const languageIndex = response[0].indexOf(languageCode);
  if (languageIndex === -1) {
    throw new Error(`language code ${languageCode} not found in the sheet.`);
  }

  const uiText = response
    .slice(1) // Skip the header row
    .reduce((acc, row) => {
      const command = row[1];
      const value = row[languageIndex]; // Using the language index to get the value
      acc[command] = value; // Constructing the object
      return acc;
    }, {}); // Initialize the accumulator as an empty object

  return uiText;
}

app.get("/getUIText", async (req, res) => {
  const Language = req.query.language; // Accessing the query parameter
  if (!Language) {
    return res.status(400).json({
      error: "'language' is required in the request query",
    });
  }
  try {
    const sheetID = "1bNdBw3qecc4bSheC_Et5hjHrRVkmOsaJWLSaERWhhrQ";
    const sheetName = `UIText`;
    const uiText = await loadUIText(sheetID, sheetName, Language);
    res.json({ uiText });
  } catch (error) {
    console.error("Error fetching users with false label flag:", error);
    res.status(500).send("Internal Server Error");
  }
});

async function loadQuestions(sheetID, sheetName) {
  const response = await loadSheet(sheetID, sheetName);
  const question = response
    .slice(1) // Skip the header row
    .map((row) => ({
      id: row[1],
      question: row[2],
    }))
    .sort((a, b) => (a.id > b.id ? 1 : -1)); // Sort by office in ascending order
  console.log("Question: ", question);

  return question;
}

app.get("/getQuestions", async (req, res) => {
  const Language = req.query.language; // Accessing the query parameter
  if (!Language) {
    return res.status(400).json({
      error: "'Language' is required in the request query",
    });
  }
  try {
    const sheetID = "1bNdBw3qecc4bSheC_Et5hjHrRVkmOsaJWLSaERWhhrQ";
    const sheetName = `Question-${Language}`;
    const questions = await loadQuestions(sheetID, sheetName);
    res.json({ questions });
  } catch (error) {
    console.error("Error fetching users with false label flag:", error);
    res.status(500).send("Internal Server Error");
  }
});

async function loadAnswers(sheetID, sheetName) {
  const response = await loadSheet(sheetID, sheetName);
  const question = response
    .slice(1) // Skip the header row
    .map((row) => ({
      id: row[1],
      answer: row[2],
    }))
    .sort((a, b) => (a.id > b.id ? 1 : -1)); // Sort by office in ascending order
  // console.log("Answer: ", question);

  return question;
}

app.get("/getAnswers", async (req, res) => {
  const Language = req.query.language; // Accessing the query parameter
  if (!Language) {
    return res.status(400).json({
      error: "'Language' is required in the request query",
    });
  }
  try {
    const sheetID = "1bNdBw3qecc4bSheC_Et5hjHrRVkmOsaJWLSaERWhhrQ";
    const sheetName = `Answer-${Language}`;
    const answers = await loadAnswers(sheetID, sheetName);
    res.json({ answers });
  } catch (error) {
    console.error("Error fetching users with false label flag:", error);
    res.status(500).send("Internal Server Error");
  }
});

async function loadRecommendImage(rec_choya, rec_meiji, languageCode) {
  const sheetID = "1bNdBw3qecc4bSheC_Et5hjHrRVkmOsaJWLSaERWhhrQ";
  const sheetName = "UIText";
  const response = await loadSheet(sheetID, sheetName);

  // Find the index of the selected language
  const languageIndex = response[0].indexOf(languageCode);
  const imageIndex = response[0].indexOf("IMAGE"); // Find the index of the IMAGE column

  let recChoyaImage, recMeijiImage;

  response.slice(1).forEach((row) => {
    const key = row[languageIndex];

    if (key === rec_choya) {
      recChoyaImage = row[imageIndex];
    } else if (key === rec_meiji) {
      recMeijiImage = row[imageIndex];
    }
  });

  // console.log("recChoyaImage:", recChoyaImage);
  // console.log("recMeijiImage:", recMeijiImage);

  return { recChoyaImage, recMeijiImage };
}

app.post("/api/chat", async (req, res) => {
  const { Gender, DoB, Q1, Q2, Q3, Q4, language } = req.body;

  if (!Gender || !DoB || !Q1 || !Q2 || !Q3 || !Q4 || !language) {
    return res.status(400).json({
      error:
        "'Gender', 'DoB', 'Q1', 'Q2', 'Q3' and 'Q4', 'language' are required in the request body",
    });
  }
  const sheetID = "1bNdBw3qecc4bSheC_Et5hjHrRVkmOsaJWLSaERWhhrQ"; // Replace with the appropriate sheet ID
  const tarotContext = await loadContext(sheetID, language);
  const promptValue = tarotContext.prompt; // Accessing the "prompt" key
  // console.log("TarotContext prompt: ", promptValue);

  const userInput = `${Gender}\n${DoB} (DD/MM/YYYY)\n${Q1}\n${Q2}\n${Q3}\n${Q4}`;

  const messages = [];
  const rowDataFirst = [
    new Date().toISOString(),
    Gender,
    DoB,
    Q1,
    Q2,
    Q3,
    Q4,
  ];
  await saveToGoogleSheetsFirst(rowDataFirst);
  messages.push({ role: "system", content: promptValue });
  messages.push({ role: "user", content: userInput });
  // console.log("User Input: ", userInput);
  // console.log("Message: ", messages);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
    });
    const actualTokenPromptRequest = completion.data.usage.prompt_tokens;
    const actualTokenCompletionRequest =
      completion.data.usage.completion_tokens;
    const finish_reason = completion.data.choices[0].finish_reason;
    // console.log("Actual Token Prompt Usage: ", actualTokenPromptRequest);
    // console.log(
    //   "Actual Token Completion Usage: ",
    //   actualTokenCompletionRequest
    // );
    // console.log("Stop Reason: ", finish_reason);

    let completion_text = completion.data.choices[0].message.content;

    // Extract prediction string
    const startPrediction = completion_text.indexOf("'Prediction':") + 14;
    const prediction = completion_text
      .slice(startPrediction)
      .replace(/'\n/g, "\\n")
      .trim();

    // Remove prediction string from completion_text
    const trimmedCompletion = completion_text
      .slice(0, startPrediction - 14)
      .trim();

    // Replace single quote with double quotes to be a valid JSON
    let validJSONString = trimmedCompletion.replace(/'/g, '"');

    // Remove trailing comma if it's present
    validJSONString = validJSONString.replace(/,\s*$/, "");

    // Append closing bracket
    validJSONString += "}";

    // Parse the validJSONString into a JSON object
    const responseObj = JSON.parse(validJSONString);

    // Append prediction back to response object
    responseObj.Prediction = prediction;

    // Extract rec_choya and rec_meiji
    const rec_choya = Q1;
    const rec_meiji_match = Q2.match(/(\（[^）]+\）|\([^)]+\))/);
    const rec_meiji = rec_meiji_match ? rec_meiji_match[0].slice(1, -1) : null;

    // Load the recommended images
    const { recChoyaImage, recMeijiImage } = await loadRecommendImage(
      rec_choya,
      rec_meiji,
      language
    );
    // console.log("recChoyaImage:", recChoyaImage);
    // console.log("recMeijiImage:", recMeijiImage);
    // Append images to the response object
    responseObj.recChoyaImage = recChoyaImage;
    responseObj.recMeijiImage = recMeijiImage;

    // Append token usage and finish reason to the response object
    responseObj.PromptTokens = actualTokenPromptRequest;
    responseObj.CompletionTokens = actualTokenCompletionRequest;
    responseObj.FinishReason = finish_reason;
    if (responseObj.Lucky) {
      responseObj.Lucky = responseObj.Lucky.join(", ");
    }

    // Send the responseObj as a response of the POST method
    res.json(responseObj);

    // Save to Google Sheets
    const rowData = [
      new Date().toISOString(),
      Gender,
      DoB,
      Q1,
      Q2,
      Q3,
      Q4,
      responseObj.Zodiac,
      responseObj.A1,
      responseObj.A2,
      responseObj.A3,
      responseObj.A4,
      responseObj.Lucky,
      responseObj.Unlucky,
      responseObj.Prediction,
      responseObj.PromptTokens,
      responseObj.CompletionTokens,
      responseObj.FinishReason,
    ];
    await saveToGoogleSheets(rowData);
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
      res.status(500).json({ error: "OpenAI API error" });
    } else {
      console.error(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

const saveToGoogleSheets = async (data) => {
  try {
    const spreadsheetId = "1bNdBw3qecc4bSheC_Et5hjHrRVkmOsaJWLSaERWhhrQ"; // replace with your spreadsheet id
    const sheetId = "Prediction"; // replace with your sheet name

    await gsapi.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetId}!A1`,
      valueInputOption: "RAW",
      resource: {
        values: [data],
      },
    });
  } catch (error) {
    console.error("Error writing to Google Sheets: ", error);
  }
};

const saveToGoogleSheetsFirst = async (data) => {
  try {
    const spreadsheetId = "1bNdBw3qecc4bSheC_Et5hjHrRVkmOsaJWLSaERWhhrQ"; // replace with your spreadsheet id
    const sheetId = "DataFirst"; // replace with your sheet name

    await gsapi.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetId}!A1`,
      valueInputOption: "RAW",
      resource: {
        values: [data],
      },
    });
  } catch (error) {
    console.error("Error writing to Google Sheets: ", error);
  }
};

// Setup Multer for saving images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "faces/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Setup Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://meiji.a-ware.me",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("a user connected");
});

app.post("/save-image", upload.none(), (req, res) => {
  const image = req.body.data;
  const base64Data = image.replace(/^data:([A-Za-z-+/]+);base64,/, "");
  const path = `D:/Aki Work/DataScience/Meiji/meiji-chocolate-campaign/meiji-ui/server/faces/${Date.now()}.jpeg`;
  fs.writeFileSync(path, base64Data, { encoding: "base64" });

  res.json({ path });
});

app.post("/analyze-image", async (req, res) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/analyze",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/update-sheet", async (req, res) => {
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  const spreadsheetId = sheetID; // replace with your Spreadsheet ID

  let data = [
    [
      new Date().toLocaleString(),
      req.body.preference,
      req.body.data.age,
      req.body.data.dominant_gender,
      req.body.data.dominant_race,
    ],
  ];

  const resource = {
    values: data,
  };

  try {
    const response = await gsapi.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1", // replace with your Sheet name
      valueInputOption: "USER_ENTERED",
      resource,
    });

    io.emit("refreshChartData");
    console.log("Sheet updated");
    return res.status(200).send("Sheet updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating sheet");
  }
});

async function loadChartData(spreadsheetId) {
  try {
    const response = await gsapi.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1", // replace with your Sheet name
    });

    const rows = response.data.values;
    const mushroomCount = rows.filter((row) => row[1] === "Mushroom").length;
    const bambooCount = rows.filter((row) => row[1] === "Bamboo").length;

    return [mushroomCount, bambooCount];
  } catch (error) {
    console.error("Error occurred while loading chart data: ", error);
    throw error; // re-throw the error so it can be handled by the caller
  }
}

app.get("/chart-data", async (req, res) => {
  try {
    const data = await loadChartData(sheetID);
    res.json(data);
  } catch (error) {
    console.error("Error occurred while processing request: ", error);
    res.status(500).send("Error occurred while processing request"); // respond with a 500 error
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
