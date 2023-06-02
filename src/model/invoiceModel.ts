import { Schema, model } from "mongoose";

const invoiceSchema = new Schema({
  id: { type:  Schema.Types.String, required: true },
  createdAt: { type:  Schema.Types.String, required: true },
  paymentDue: { type:  Schema.Types.String, required: true },
  description: { type:  Schema.Types.String, required: true },
  paymentTerms: { type:  Schema.Types.Number, required: true },
  clientName: { type:  Schema.Types.String, required: true },
  clientEmail: { type:  Schema.Types.String, required: true },
  status: { type:  Schema.Types.String, required: true },
  senderAddress: {
    street: { type:  Schema.Types.String, required: true },
    city: { type:  Schema.Types.String, required: true },
    postCode: { type:  Schema.Types.String, required: true },
    country: { type:  Schema.Types.String, required: true },
  },
  clientAddress: {
    street: { type:  Schema.Types.String, required: true },
    city: { type:  Schema.Types.String, required: true },
    postCode: { type:  Schema.Types.String, required: true },
    country: { type:  Schema.Types.String, required: true },
  },
  items: [
    {
      name: { type:  Schema.Types.String, required: true },
      quantity: { type:  Schema.Types.Number, required: true },
      price: { type:  Schema.Types.Number, required: true },
      total: { type:  Schema.Types.Number, required: true },
    },
  ],
});

const Invoice = model("Invoice", invoiceSchema);

export default Invoice;
