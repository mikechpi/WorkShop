import Express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = Express();

const PORT = process.env.PORT;

app.use(Express.urlencoded({extended:true}))
app.use(Express.json());


const yAppRouter = require("./routes/yApp.router");
const scrapRouter = require("./routes/scrap");
const installRouter = require("./routes/install");

app.use("/apps", yAppRouter);
app.use("/scrap", scrapRouter);
app.use("/install", installRouter);


app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));