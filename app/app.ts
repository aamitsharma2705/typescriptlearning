import dotEnv from "dotenv";
import express from "express";
import routes from "./routes";
// # it automatically loads the environment variables defined in .env
dotEnv.config();

const app: express.Application = express();

app.use("/", routes);

app.listen(process.env.port, () => {
    // console.log(process.env)
    console.log("Example app listening on port --", process.env.port);
});
