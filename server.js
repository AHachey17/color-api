const express = require('express')
const app = express()
const cors = require('cors')//just to make sure not runnning into any CORS errors
const PORT = 8000

app.use(cors())
//create JSON, a big object, with 3 subobjects
const colors = {
    'blue': {
        plus1: '+ red = purple',
        plus2: '+ yellow = green',
    },
    'red':{
        plus1: '+ yellow = orange',
        plus2: '+ blue = purple',
    },
    'yellow':{
        plus1: '+ blue = green',
        plus2: '+ red = orange',
    },
    'unknown':{
        plus1: '- please enter a primary color',
        plus2: '- please enter a primary color'
    }
  
}

//start building api, simple interface(url) for something complex
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})//hears get request, able to response, where the file is, send
//the complex reponse is sending the file

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{ //:name, query parameter
    const rapperName = request.params.name.toLowerCase()

    if( colors[rapperName] ){
        response.json(colors[rapperName])
    }else{
        response.json(colors['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})