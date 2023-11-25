import cors from "cors";
import express from "express";
import indexRoute from "./routes/indexRoute.js";
import expressLayouts from "express-ejs-layouts";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(indexRoute);

app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1:${port}`);
});
