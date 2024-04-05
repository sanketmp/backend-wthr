import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome!!!");
});

app.get("/:location", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?${req.params.location}&appid=${process.env.APPID}`
    );
    res.send(response.data);
  } catch (error) {
    res.send(error.response.data);
  }
});

app.listen(port, () => console.log(`Server is listening on PORT ${port}.`));
