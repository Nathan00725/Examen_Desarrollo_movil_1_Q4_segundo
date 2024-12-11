const express = require('express')
const logsRouter = require('./router/LogsRouter');
const cors = require ('cors')

const app= express();

app.use(cors())

app.use(express.json())

var port = 5000;

app.use('/logs',logsRouter)



app.get('/logs', (req, res) => {
    res.json(logs);
});

/*
    const log = req.body;
    logs.push(log);
    res.status(201).json({ message: 'Log added successfully', log });*
}); /* para que lo datos quedaran guardados por donde se mueven tuve que usar IA ya que no tenia idea
por que de la manera que conosco es diferente a esta 


const postArma = async(req, res)=>{
 
    //Sintaxis de destructuracion de Arma
    const { nombre_arma , id_tipo, id_tipo_disparo, id_fabricante,
            id_calibre} = req.body;
 
     const params =  [nombre_arma, id_tipo, id_tipo_disparo, id_fabricante,
                      id_calibre];
 
     const sql = `insert into tbl_arma 
                 (nombre_arma, id_tipo, id_tipo_disparo, 
                  id_fabricante, id_calibre )
                 values 
                 ($1, $2, $3, $4, $5) returning * `
 
     const result = await db.query(sql , params);
 
     res.json(result);
 }

 que la vi en otra clase pero es diferente y por eso le tuve que pedir ayuda a la IA

*/


let logs = [];


app.post('/log_position', (req, res) => {
    try {
        const { left, top } = req.body;
        const logEntry = { left, top, timestamp: Date.now() };
        logs.push(logEntry);
        res.status(201).json({ message: 'Log added successfully', log: logEntry });
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error: ' + error });
    }
});

app.listen(port,()=>{
    console.log('Ejecutando en puerto', port)
})

