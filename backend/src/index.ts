import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Config app
app.use(
  cors({
    credentials: true,
    origin: [process.env.URL_REACT as string],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
