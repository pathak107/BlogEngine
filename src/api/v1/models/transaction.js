const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    from: String,
    to: String,
    amount: String,
    transaction_date: Date,
    status: String, // success or failure
    type: String, // credit or debit
});

const transaction = model('Transaction', transactionSchema);

module.exports = transaction;
