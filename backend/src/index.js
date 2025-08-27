import { connectDB } from "./config/db.config.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "src/.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server start successfully on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`error on database connection ${err}`);
  });
