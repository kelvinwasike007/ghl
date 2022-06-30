const Account = require('../models/account')
const md5 = require('md5')
var jwt = require('jsonwebtoken');
const accountController = {
    add: (req, res)=>{
        const {body} = req
        console.log(req)
        
        Account.create({
            username: body.username,
            password: body.password == undefined ? undefined : md5(body.password) ,
            primaryMail: body.email,
            primaryPhone: body.phone,
            role: body.role,
            refBy: body.refCode,
            refCode: 'GHL-'+body.username
        }, (e)=>{
            if(e){
                res.json({message: e.message, ok:0, body:body}).status(200)
            }else{
                res.json({message: "Account Created", ok: 1}).status(201)
            }
        })
    },

    login: async (req, res)=>{
        const {body} = req

        console.log(body)
        const account = await Account.find({
            username: body.username,
            password: body.password == undefined ? undefined : md5(body.password)
        })


        if(account.length > 0){
            var token = account[0]._id
            res.json({
                data: {
                    role:account[0].role,
                    token: account[0]._id,
                    info: account[0]
                },
                message: "Authenticated",
                ok: 1
            }).status(200)
        }else{
            res.json({
                message: "User Not Found", 
                ok: 0
            })
        }

        
    },
}

module.exports = accountController