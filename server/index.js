import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/user.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/users", UserRoutes);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => console.log(err.message));
