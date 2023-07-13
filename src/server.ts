import express from "express";
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import cors from 'cors'
import swagerMiddlwares from "middleware/swager-middlware";
import connect from "database/mongo";
import Route from "routes/routes";

const server = express()
dotenv.config()
connect()
server.use(bodyParser.json())
server.use(cors())
server.use('/api',Route)

server.use("/", ...swagerMiddlwares)
server.listen(process.env.PORT ||3000, () => console.log("Server is listening at http://localhost:3000"))
