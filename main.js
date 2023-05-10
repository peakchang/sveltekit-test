import express from "express"
import { handler } from "./site/build/handler.js"
import dotenv from "dotenv";

dotenv.config();

const port = 3000;
const app = express();


app.use(handler);

app.listen(port, () => {
    console.log(`server running in port ${port}`);
})
