const CryptoJS = require('crypto-js')
const Funcionario = require('../models/Funcionario')

const login = async (req,res)=>{
    const {nome, email, senha} = req.body

    if(!email || !senha) return res.status(400).json({message: 'todos os dados sao necessarios'})

    try{
        const funcionario = await Funcionario.findOne({where:{email:email}})
        if(!funcionario)return res.status(400).json({message: 'email valido por favor'})
            
        funcionario.senha = CryptoJS.AES.decrypt(funcionario.senha, 'bernardoeoretrogostodeacai').toString(CryptoJS.enc.Utf8)
        if(senha !== funcionario.senha)return res.status(400).json({message: 'senha invalida'})

        const duracao = 180 * 60 * 1000
        let expiracao = Date.now() + duracao

        let payload = CryptoJS.AES.encrypt(JSON.stringify({expiraem:expiracao}),'bernardoeoretrogostodeacai').toString()
        res.status(200).json({token: payload, nome: funcionario.nome, message: 'login realizado'})
        
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
module.exports = {login}