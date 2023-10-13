//import json-server in index.js file
const jsonServer = require('json-server')

//create a server for media player app
const mediaPlayerServer = jsonServer.create()

//setup path/route from jsln file
const router  = jsonServer.router("db.json")

//retur middlewears used by JSON server
const middlWares = jsonServer.defaults() 

//set up port for runnning server
const port = 4000 || process.env.PORT

//use middlewears and Router in sever
mediaPlayerServer.use(middlWares)
mediaPlayerServer.use(router)

//to listen server for resolving request form client
mediaPlayerServer.listen(port,()=>{
    console.log(`Media player server started at port ${port}, and waiting for client request!!!`);
})