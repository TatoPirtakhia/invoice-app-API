import Joi from "joi";

const invoiceJoiSchema = async () => {
  return Joi.object({
    id: Joi.string().required(),
    createdAt: Joi.string().required(),
    paymentDue: Joi.string().required(),
    description: Joi.string().required(),
    paymentTerms: Joi.number().required(),
    clientName: Joi.string().required(),
    clientEmail: Joi.string().email().required(),
    status: Joi.string().required(),
    senderAddress: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      postCode: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
    clientAddress: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      postCode: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
    items: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
        total: Joi.number().required(),
      })
    ),
    total: Joi.number().required()
  });
};

export default invoiceJoiSchema;
