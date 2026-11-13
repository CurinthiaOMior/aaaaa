const btn = document.getElementById('btn')
const output = document.getElementById('output')

btn.addEventListener('click', async(e)=>{
    e.preventDefault()
    const valores = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    }


    try{
        const resposta = await fetch('http://localhost:3000/funcionario', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(valores)
        })
        const dados = await resposta.json()
        output.innerHTML = dados.message

    }catch(err){
        output.innerHTML = err.message

    }
})