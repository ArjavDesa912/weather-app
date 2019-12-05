const request = require('request')

const forecast =(longitude,latitude,callback)=>{
const url  ='https://api.darksky.net/forecast/d2404e594f06f6596baf25d06534f4e8/'+latitude+','+longitude

request ({url:url,json:true},(error,response)=>{
        if(error){
            console.log('Cannot connect the server please check your connection')
        }
        else if(response.body.error){
            console.log('Please Enter a valid address')
        }
        else{
            callback(undefined,{

                temp:response.body.currently.temperature,
                rain:response.body.currently.precipProbability
                
            })
        }

 
}
)
}
module.exports = forecast;
