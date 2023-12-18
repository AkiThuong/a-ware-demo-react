import express from 'express';
import multer from 'multer';
import axios from 'axios';
import fs from 'fs';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { google } from 'googleapis';
import admin from 'firebase-admin';
import serviceAccount from './ai-chatbot-training-firebase-adminsdk-jg5lk-38490b3e22.json' assert { type: 'json' };
import keys from './ai-chatbot-training-7796cf9d571e.json' assert { type: 'json' };




admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "ai-chatbot-training.appspot.com"
  });
  
const bucket = admin.storage().bucket();

const app = express();
const sheetID = "1LjRNIzsduxn4AgJW9PGAp-csD6m8wHP0SkIid0LmAIY"
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Increase limit for base64 image data

// Initialize Google API client
const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connected to Google Sheets API!');
  }
});

const gsapi = google.sheets({ version: 'v4', auth: client });

// Setup Multer for saving images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'faces/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage });

// Setup Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "https://meiji.a-ware.me",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });
io.on('connection', (socket) => {
  console.log('a user connected');
});

app.post('/save-image', upload.none(), (req, res) => {
  const image = req.body.data;
  const base64Data = image.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  const path = `D:/Aki Work/DataScience/Meiji/meiji-chocolate-campaign/meiji-ui/server/faces/${Date.now()}.jpeg`;
  fs.writeFileSync(path, base64Data, { encoding: 'base64' });

  res.json({ path });
});


// app.post('/save-image', upload.none(), async (req, res) => {
//     const image = req.body.data;
//     const base64Data = image.replace(/^data:([A-Za-z-+/]+);base64,/, '');
//     const filename = `images/${Date.now()}.jpeg`;
  
//     const file = bucket.file(filename);
//     const writeStream = file.createWriteStream({
//       metadata: {
//         contentType: 'image/jpeg',
//       },
//     });
  
//     writeStream.on('error', (err) => {
//       console.error('Error writing file to Firebase Storage', err);
//       res.status(500).json({ error: 'Error writing file to Firebase Storage' });
//     });
  
//     writeStream.on('finish', async () => {
//       // The file upload is complete.
//       console.log(`File ${filename} uploaded to Firebase Storage.`);

//       // Make the image publicly accessible
//       await file.makePublic();

//       // Generate a URL for the image
//       const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

//       res.json({ path: publicUrl });
//     });
  
//     // Write the base64 data to a file.
//     writeStream.end(Buffer.from(base64Data, 'base64'));
// });


app.post('/analyze-image', async (req, res) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/analyze', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/update-sheet', async (req, res) => {
  
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );
  
    const gsapi = google.sheets({ version: 'v4', auth: client });
  
    const spreadsheetId = sheetID; // replace with your Spreadsheet ID
  
    let data = [
      [
        new Date().toLocaleString(),
        req.body.preference,
        req.body.data.age,
        req.body.data.dominant_gender,
        req.body.data.dominant_race
      ]
    ];
  
    const resource = {
      values: data,
    };
  
    try {
      const response = await gsapi.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1', // replace with your Sheet name
        valueInputOption: 'USER_ENTERED',
        resource,
      });
  
      io.emit('refreshChartData');
      console.log('Sheet updated');
      return res.status(200).send('Sheet updated');
    } catch (err) {
      console.log(err);
      res.status(500).send('Error updating sheet');
    }
  });
  

    async function loadChartData(spreadsheetId) {
      try {
          const response = await gsapi.spreadsheets.values.get({
              spreadsheetId,
              range: 'Sheet1', // replace with your Sheet name
          });

          const rows = response.data.values;
          const mushroomCount = rows.filter(row => row[1] === 'Mushroom').length;
          const bambooCount = rows.filter(row => row[1] === 'Bamboo').length;

          return [mushroomCount, bambooCount];
      } catch (error) {
          console.error("Error occurred while loading chart data: ", error);
          throw error;  // re-throw the error so it can be handled by the caller
      }
  }

  app.get('/chart-data', async (req, res) => {
      try {
          const data = await loadChartData(sheetID);
          res.json(data);
      } catch (error) {
          console.error("Error occurred while processing request: ", error);
          res.status(500).send("Error occurred while processing request");  // respond with a 500 error
      }
  });
  
  const PORT = process.env.PORT || 3001;
    server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

