//Servidor
const express = require('express')
const server = express();
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurar NunJucks (template enginee)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configurações do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Star servidor
.listen(1234)

