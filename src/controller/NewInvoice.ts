import { Request, Response } from "express";
import Invoice from "model/invoiceModel";
import invoiceJoiSchema from "schema/invoiceSchema";

export const NewInvoice = async (req: Request, res: Response) => {
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
    total
  } = data;
  const invoice = await Invoice.findOne({
    id,
  });
  if (invoice) {
    return res.status(201).json("Please edit or creeate new invoice");
  } else {
    await Invoice.create({
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
      total
    });
    return res.status(201).json("invoise created succesfully");
  }
};
