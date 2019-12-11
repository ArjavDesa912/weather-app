



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e)=>{
    
    const location = search.value
    
   
    messageOne.textContent='Loading.....'
    messageTwo.textContent='.......'
    e.preventDefault()
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
            response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = 'the temperature is '+data.forecast.temp+ 'the probability of raining is '+ data.forecast.rain
                messageTwo.textContent = data .location
            }
        })
    })
    
})