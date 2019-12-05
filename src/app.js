const express = require('express')
const app = express()
const  path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
 const geocode = require('./utils/geocode')

const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


app.set('view engine','hbs')
app.set('views',viewPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        author:'Arjav desai'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'the address entered is not valid!'
        })

    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>
    {
        if(error){
            return res.send({error})
        }

        forecast(latitude,longitude,(error,forecastData)=>
        {
            if(error){
               return  res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })
    }
    )
    // res.render('weather',{
    //     forecast:'It is rxainy today',
    //     loaction:'Philadelphia',
    //     address:req.query.address
    // })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helptext:'hello this is arjav do  you need any help with your node.js app?',
        email:'akdesai912@gmail.com',
        contact:'7016223179',
        title:'HELP',
        author:'arjav desai'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name:'arjav desai',
        type:'fullstack web developer',
        age:'18',
        title:'about',
        author:'arjav desai'
    } )
   
})
app.get('/help/*',(req,res)=>{
    res.render('404U',{
        message:'The page not found',
        })
    })
app.get('*',(req,res)=>{
    res.render('404U',{
    message:'The page not found',
        })
    })

app.listen(5500,()=>{
    console.log('the server is up and running')
})
