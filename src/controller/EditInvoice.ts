import { Request, Response } from "express";
import Invoice from "model/invoiceModel";
import invoiceJoiSchema from "schema/invoiceSchema";

export const EditInvoice = async (req: Request, res: Response) => {
  const { body } = req;

  const validator = await invoiceJoiSchema();

  const { value: data, error } = validator.validate(body);
  if (error) {
    return res.status(422).json(error.details);
  }
  const {
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = data;

  const invoice = await Invoice.findOne({ id });

  if (invoice) {
    invoice.id = id;
    invoice.createdAt = createdAt;
    invoice.paymentDue = paymentDue;
    invoice.description = description;
    invoice.paymentTerms = paymentTerms;
    invoice.clientName = clientName;
    invoice.clientEmail = clientEmail;
    invoice.status = status;
    invoice.senderAddress = senderAddress;
    invoice.clientAddress = clientAddress;
    invoice.items = items;
    invoice.total = total;
    await invoice.save();
    return res.status(200).json("changed succesfully");
  }
  return res.status(404).json("invoice with this id not found");
};
