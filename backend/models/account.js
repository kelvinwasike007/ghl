const mongoose = require('mongoose')

const  {Schema, model} = mongoose

const investmentLog = new Schema({
    brokerId: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    transactionType: {
        type:String,
        required: true,
        enum: ['deposit', 'withdraw']
    },
    amount: {
        type: Number,
        required: true
    },
    currency: String,
    Date: {
        type: Date,
        default: Date.now()
    }
})
const Account = new Schema({
    username: {
        type: String,
        required: 'Username is Required',
        unique: true
    },
    password: {
        type: String,
        required: 'Password is needed'
    },
    phones: [Number],
    emails: [String],
    primaryMail: {
        type:String,
        required: true
    },
    primaryPhone: {
        type:Number,
        required: true
    },
    avatar: Buffer,
    role: {
        type: String,
        required: 'Role must be set',
        enum: ["Admin", "Normal", "Broker", "Sub-broker"]
    },
    refCode: {
        type:String,
        unique: true
    },
    refBy: String,
    commission: {
        type: Number,
        default: 0
    },
    investment: {
        type: Number,
        default: 0
    },
    investmentLog: [investmentLog]
})

module.exports = model('Account', Account)