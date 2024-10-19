import express from "express";

import envVariables from "./config/envVariables.js";
import connectDatabase from "./config/connectDatabase.js";
import blogRoutes from "./routes/blogRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import cors from "cors";
const app = express();
app.use(cors());
const port = envVariables.PORT;

app.use(express.json());

app.use("/api/v1", blogRoutes);
app.use("/api/v1", serviceRoutes);

app.listen(port, async function () {
  try {
    await connectDatabase();
    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.log(error);
  }
});
