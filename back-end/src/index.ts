import Express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = Express();

const PORT = process.env.PORT;

app.use(Express.json());

app.use(yap);

app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));