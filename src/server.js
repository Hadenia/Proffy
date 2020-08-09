const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89999999",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Hadênia Rodrigues",
        avatar: "https://avatars0.githubusercontent.com/u/42811357?s=460&u=31bec0ea04f8b861fe071af87204bc7ea3bca046&v=4",
        whatsapp: "89999999",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Redes",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },    
    {
        name: "Bruno Valniery",
        avatar: "https://avatars1.githubusercontent.com/u/8335305?s=460&u=203b39a74174bc1dbe279de61f5f9cb446447c2a&v=4",
        whatsapp: "89999999",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Informática Educacional",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",    
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}



function pageLanding(req, res){
  //  return res.sendFile(__dirname + "/views/index.html") 
    //usando nunjucks para renderizar
  return res.render("index.html") 
}

function pageStudy(req, res){
    const filters = req.query

    return res.render("study.html", {proffys, filters, subjects, weekdays}) 

}

function pageGiveClasses(req, res){
    const data = req.query
   
    //Tranformando chaves em arrays
    //Se tiver dados
    
    const isNotEmpty = Object.keys(data).length > 0
    
    if (isNotEmpty) {
        data.subject = getSubject(data.subject);
        //adicionar dados ao objeto a lista de proffys
        proffys.push(data)    
        return res.redirect("/study")
    }
    //se não mostrar a página
    return res.render("give-classes.html", {subjects, weekdays}) 
}

//Servidor
const express = require('express')
const server = express();

//Configurar NunJucks (template enginee)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configurações do servidor
server
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Star servidor
.listen(8081)

