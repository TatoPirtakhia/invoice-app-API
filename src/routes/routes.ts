import { EditInvoice } from "controller/EditInvoice";
import { NewInvoice } from "controller/NewInvoice";
import express from "express";
const Route = express.Router();

Route.post("/NewInvoice", NewInvoice);
Route.post("/EditInvoice", EditInvoice);

export default Route