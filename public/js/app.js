const fetch = require('node-fetch')



const weatherForm = querySelector('form')
const search = querySelector('input')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    fetch(`http://localhost:5500/weather?address=`+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log(data.forecast)
                console.log(data.location)
    
            }
        })
    })
    
})