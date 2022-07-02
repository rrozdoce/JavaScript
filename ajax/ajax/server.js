const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const port = 8081

// usar todos os arquivos estaticos na folder
app.use(express.static)
app.use(bodyParser.urlencoded({extended: true}))

// ser vir um json dentro do body da requisicao esse
// vai ser o codigo q vai aplicar pra transformar json em Objeto
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, '.')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso.')
    })
})

app.listen(port, () => {
    console.log('Executando...')
    console.log(`http://localhost/${port}`)
})