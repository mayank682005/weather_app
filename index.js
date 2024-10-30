const id="enter your api key"
let url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function getdata(city){

    let x = await fetch(url+city+"&appid="+id);
    let data = await x.json()
    /*if (!x.ok){
        document.querySelector("#error").style.display="block"
    }*/
    if (data.cod=="404"){
        document.querySelector("#error").style.display="block"

    }
    
    console.log(data)
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"°c"
    document.querySelector("#city").innerHTML=data.name
    document.querySelector("#humidity").innerHTML=data.main.humidity+"%"
    document.querySelector("#windspeed").innerHTML=data.wind.speed+"km/h"
    
    

    let icon=document.querySelector("#icon")

    if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Thunderstorm"){
        icon.src="images/thunderstorm.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Snow"){
        icon.src="images/snow.png"
    }
    else if(data.weather[0].main=="Clear"){
        icon.src="images/clear.png"
    }
    document.querySelector("#error").style.display="none"
    document.querySelector("#weather").style.display="block"
    document.querySelector("#details").style.display="flex"

}
const button=document.querySelector("#button")
const search=document.querySelector("#search input")
button.addEventListener("click",function(){
    let c=getdata(search.value)
    /*c.catch((err)=>{
        console.log("error the city not found")
        document.querySelector("#error").style.display="block"
    })*/

})

document.querySelector("#error").style.display="none"
