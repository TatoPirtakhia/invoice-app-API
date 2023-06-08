import { Request, Response } from "express";
import Invoice from "model/invoiceModel";
export const GetInvoices = async (_req: Request, res: Response) => {
  const data = await Invoice.find();
  const newData = data.map((data) => {
    const item = data.items.map((dataitems) => {
      return {
        name: dataitems.name,
        quantity: dataitems.quantity,
        price: dataitems.price,
        total: dataitems.total,
      };
    });
    return {
      id: data.id,
      createdAt: data.createdAt,
      paymentDue: data.paymentDue,
      description: data.description,
      paymentTerms: data.paymentTerms,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status: data.status,
      senderAddress: data.senderAddress,
      clientAddress: data.clientAddress,
      items: item,
      total: data.total
    };
  });

  return res.status(201).json(newData);
};
