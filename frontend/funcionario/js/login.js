const btn = document.getElementById('btn')
const output = document.getElementById('output')

btn.addEventListener('click', async(e)=>{
    e.preventDefault()
    const valores = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    }


    try{
        const resposta = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(valores)
        })

        const dados = await resposta.json()
        localStorage.setItem('token', dados.token)
        localStorage.setItem('nome', dados.nome)
        output.innerHTML = dados.message

    }catch(err){
        output.innerHTML = err.message

    }
})