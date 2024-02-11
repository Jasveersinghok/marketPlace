import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connection from "./config/db.js";
import authRouter from "./routes/authroute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import morgan from "morgan";
import path from "path";
//creating app instance
const app = express();

//envoirment variable configuration
dotenv.config();
const PORT = process.env.PORT;
const DEV_MODE = process.env.DEV_MODE;

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./fronend/build")));
// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);

app.use("*", function (req, res) {
  res.sendfile(path.join(__dirname, "./frontend/build/index.html"));
});

//data base calling
connection();

app.get("/", (req, res) => {
  res.send("app is working smoothly");
});
//PORT

app.listen(PORT, (req, res) => {
  console.log(
    `server is listening under ${DEV_MODE} mode on port : ${PORT} `.bgCyan.white
  );
});
