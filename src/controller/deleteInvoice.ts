import { Request, Response } from "express";
import Invoice from "model/invoiceModel";
export const deleteInvoice = async (req: Request, res: Response) => {
    const {id} = req.body
  
    const invoice = await Invoice.findOne({id});
    await invoice?.deleteOne()

  return res.status(201).json('succesfully delete');
};
