CryptoJS = require('crypto-js')

const authMiddleware = async(req,res,next)=>{
    let token = req.headers['authorization']

    if(!token) return res.status(400).json({message: 'token invalido'})
    
        try{
            token = CryptoJS.AES.decrypt(token, 'bernardoeoretrogostodeacai').toString(CryptoJS.enc.Utf8)

            if(!token) return res.status(400).json({message: 'token invalido'})

            token = JSON.parse(token)

            if(!token) return res.status(400).json({message: 'token invalido'})
                
            if(token.expitaem < Date.now()) return res.status(400).json({message: 'faça login novamente'})
            next()
            }catch(err){
            console.log('erro ', err)
            res.status(500).json({message: 'errado'})
            }
            
}
module.exports = authMiddleware