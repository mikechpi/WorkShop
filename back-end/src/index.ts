import Express from "express";
import dotenv from "dotenv";
const http = require('http');
const socketio = require('socket.io');

dotenv.config();

const app = Express();


app.use(Express.static("public"));
const PORT = process.env.PORT;

app.use(Express.urlencoded({extended:true}))
app.use(Express.json());


const yAppRouter = require("./routes/yApp.router");
const scrapRouter = require("./routes/scrap");
const installRouter = require("./routes/install");

app.use("/apps", yAppRouter);
app.use("/scrap", scrapRouter);
app.use("/install", installRouter);


const server = app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));
export const io = socketio(server);

io.on('connection', (socket: any) => {
    console.log('New connection')
})
io.on('connection', (socket: any) => {
    console.log(`New connection: ${socket.id}`);
})