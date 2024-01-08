import Express from "express";
import dotenv from "dotenv";
import router from "./routes/router";

dotenv.config();

const app = Express();

const PORT = process.env.PORT;

app.use(Express.json());

app.use(router);

app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));