import { Request, Response } from "express";
import Invoice from "model/invoiceModel";
export const deleteInvoice = async (req: Request, res: Response) => {
    const {id} = req.params
    console.log(id)
    const invoice = await Invoice.findOne({id});

    if (invoice){
      await invoice.deleteOne()
      return res.status(200).json('succesfully delete');
    }

  return res.status(201).json('somthing went wrong');
};
