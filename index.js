
async function showweather(){
  let input=document.getElementById("city")
  getWeather(input.value)
}
async function getWeather(city){
  try{
     let res=await fetch(`https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`,{
    "method":"GET",
    "headers":{
      'x-rapidapi-key': '1f8bf34cdemsh254432b06785798p1c26b1jsnb25b0709b57b',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
  })
  let data=await res.json()
  displaydata(data.main.temp)
  }catch(error){
    console.log(error.message)
  }
}
function displaydata(data){
  let container=document.getElementById("main")
  container.innerHTML=`
  <h3>Temperature:${data}`
}
