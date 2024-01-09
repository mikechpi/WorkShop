import Express from "express";
import dotenv from "dotenv";
import yappRouter from "./routes/yApp.router";

dotenv.config();

const app = Express();

const PORT = process.env.PORT;

app.use(Express.json());

app.use(yappRouter);

app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));