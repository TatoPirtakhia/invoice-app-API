import { EditInvoice } from "controller/EditInvoice";
import { GetInvoices } from "controller/GetAllInvoices";
import { NewInvoice } from "controller/NewInvoice";
import { deleteInvoice } from "controller/deleteInvoice";
import express from "express";
const Route = express.Router();

Route.post("/NewInvoice", NewInvoice);
Route.post("/EditInvoice", EditInvoice);
Route.get("/getInvoices", GetInvoices);
Route.delete("/deleteInvoice/:id", deleteInvoice);

export default Route