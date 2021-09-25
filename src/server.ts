// Initially parse and load environment file
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connect } from "./database";

connect();

const PORT = process.env.PORT;
app.listen(PORT, function () {
  console.log(`Starting the App on Port: ${PORT}`);
});
