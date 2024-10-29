const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

    const mulheres = [
        {
            nome: 'Simara Conceição',
            imagem: 'https://bit.ly/3LJIyOF',
            minibio: 'Desenvolvedora e instrutora'
        },
        {
            nome: 'Stefani Freitas',
            imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQEwYrnouOF6aw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696857206537?e=1735776000&v=beta&t=dEcxSzUY-6QGK3TAeKuogDTne_b3zbbIIzZNwnBLaa0',
            minibio: 'Coordenadora Pedagógica e Criadora de Conteúdos Digitais'
        },
        {
            nome: 'Celly Lima',
            imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQGtu5sS1KGKIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700429128881?e=1735776000&v=beta&t=x9OoS3PTaP1IT9ZS0lPWfglT6Y8xBDW8kw4n3lmXQJY ',
            minibio: 'Administradora e tech em formação'
        }
    ]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)