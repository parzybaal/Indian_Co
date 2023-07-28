const mongoose = require('mongoose');

const ticketsCollection = 'tickets';

const ticketsSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            require: true,
          },
        purchaser: {
            type: mongoose.Schema.Types.String,
            require: true,
            ref: 'users'
          },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products'  
            }
        ]
    },
    {
        timestamps: {
            createdAt: "purchase_datetime",
          },
        versionKey: false
    }
);

ticketsSchema.pre('find', function (){
  this.populate('purchaser', 'email');
  this.populate('products');
});

const ticketModel = mongoose.model(ticketsCollection, ticketsSchema);

module.exports = {
  ticketModel
};