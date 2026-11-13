const db = require('./db/conn')
const {Funcionario, Material, Movimento, Obra} = require('./models/rell')


async function syncdb(){
    try{
        await db.sync({force:true})
    }catch(err){
        console.log(err)
    }finally{
        await db.close()
    }
}
syncdb()