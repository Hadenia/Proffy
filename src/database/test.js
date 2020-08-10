//Buscando db
const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
    //Inserir dados
    proffyValue = {
        name: "Amanda Myris",
        avatar: "https://avatars0.githubusercontent.com/u/9061003?s=460&u=f47a69861752523470b48f04bfbbd00b120f052d&v=4",
        whatsapp: "89999999",
        bio: "Instrutura Educadora Física",        
    }

    classValue = {
        subject: 4,
        cost: "20",       
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }

    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados inseridos

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado proffys
    //e trazer juntos dados dos prof
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    // console.log(selectClassesAndProffys)

    //O horário que a pessoa trabalha, é das 8h até as 18h
    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
       

    `)

    //console.log(selectClassesSchedules)

})