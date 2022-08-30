import * as dotenv from "dotenv";
import express from "express";
import cityRouter from "./routes/city.routes.js";
import employeeRouter from "./routes/employee.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/city", cityRouter);
app.use("/employee", employeeRouter);

export default app;
