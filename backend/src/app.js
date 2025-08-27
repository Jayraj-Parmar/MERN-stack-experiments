import express from "express";
import cors from "cors";
import empRoute from "./routes/employee.route.js";

const app = express();

app.use(
  cors({
    // origin: process.env.CORS_ORIGIN,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employee", empRoute);

export { app };
