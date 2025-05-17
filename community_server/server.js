// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();

const PORT = 5111;
const NEWS_API_KEY = "pub_875177fdac65040b6ed21986a5e45c8bbb778"; // Replace this

app.use(cors());

app.get("/api/abia-news", async (req, res) => {
  try {
    const response = await axios.get("https://newsdata.io/api/1/news", {
      params: {
        apikey: NEWS_API_KEY,
        country: "ng",
        q: "Abia State",
        language: "en",
      },
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
