const request = require('request');
const geocode = (address,callback)=>{
    const url1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+
    '.json?access_token=pk.eyJ1IjoiYXJqYXZkZXNhaSIsImEiOiJjazA5ajd6b3AwOG0xM29waXlyb2VydThrIn0.z4Q9q8ksfJAQcIFaKa-Z2Q&limit=1';
    request({url:url1,json:true},(error,response)=>
    {
        if(error){
            console.log('Cannot reach the server!!! please check your network connection',undefined);
        }
        else if(response.body.features.length===0){
         console.log('please check the information you have entered !!',undefined);
            
        }
        else
        { callback(undefined,{
            longitude:response.body.features[0].center[1],
            latitude:response.body.features[0].center[0],
            location:response.body.features[0].place_name
        
        }
            
        )}
    }
        
        );
}

module.exports = geocode;