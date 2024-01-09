import Express from "express";
import dotenv from "dotenv";
import yappRouter from "./routes/yApp.router";
// import routerYApp from "./routes/yapp";

dotenv.config();

const app = Express();

const PORT = process.env.PORT;

app.use(Express.json());

// app.use(routerYApp);
const scrapRouter = require("./routes/scrap");
const installRouter = require("./routes/install");

app.use("/scrap", scrapRouter);
app.use("/install", installRouter);

app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));