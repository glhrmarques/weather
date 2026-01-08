import express from "express";
import dotenv from "dotenv";
import axios from "axios";

const app = express();
const PORT = 3003;

dotenv.config();

app.get('/', (req,res) => {
    res.send('Weather API server is running');
});

const connectWeather = async () => {
    //api key
    const apiKey = process.env.WEATHER_API;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=-33.447487&lon=-70.673676&appid=${apiKey}`;

    try {
       const response = await axios.get(url);
        console.log("WeatherAPI connected", response.data)
    } catch (error) {
        console.log("WeatherAPI failed to connect:", error.message);
    }
};

await connectWeather()

app.listen(PORT, () => console.log(`Server running o http://localhost:${PORT}`));