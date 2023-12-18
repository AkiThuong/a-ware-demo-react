
import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
const app = express();
app.use(cors());
app.use(bodyParser.json())

app.get("/hello", async (req, res) => {
  res.status(200).json({ message: "Hello from Next.js!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
