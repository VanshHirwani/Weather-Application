
const key="d1845658f92b31c64bd94f06f7188c9c";
let content=document.querySelector(".CONTENT");
let dataHide=document.querySelector(".datahide");
let latitude=0;
let longitude=0;
let city="";
let value1="";
let value2="";
async function cll(){
    let city1= document.querySelector("#button");
     city=await city1.value;
     city1.value="";
     weatherData();
}

 function showWeather()
{
    let temp=document.querySelector(".temp");
   let tempvalue= `Temperature:-${value1?.main?.temp.toFixed(2)} C`;
   let desc=document.querySelector(".desc");
   let descvalue=value1?.weather?.[0]?.description;
   console.log(descvalue);
    let speed=document.querySelector(".windvalue1");
   let speedvalue =`${value1?.wind?.speed.toFixed(2)} Km/H`;
   let humidity=document.querySelector(".humidity2value");
   let humidityvalue =`${value1?.main?.humidity.toFixed(2)} %`;
   let cloudss=document.querySelector(".cloudsvalue1")
   let cloudsvalue=`${value1?.clouds?.all.toFixed(2)} %`;
   let cityName1=document.querySelector(".cityname");
   let cityvalue1=value1?.name;
   console.log(cityvalue1);
   const d = new Date();
   let hr=d.getHours();
   let part=value1?.weather?.[0]?.main;
   console.log(hr+" "+part);
   let weatherImage=document.querySelector(".weatherimage");
  
     console.log(part);
    
   if(part=="Rain" && hr>=5 && hr<19)
    weatherImage.style.backgroundImage ="url(rain.png)";
  else if(part=="Rain")
  weatherImage.style.backgroundImage ="url(rain-night.jpg)";
    if(part=="Clear" && hr>=5 && hr<19)
    weatherImage.style.backgroundImage ="url(clear.jpg)";
  else if(part=="Clear")
    weatherImage.style.backgroundImage ="url(clear-night.jpg)";
   if(part=="Clouds" && hr>=5 && hr<19)
    weatherImage.style.backgroundImage ="url(clouds.jpg)";
  else if(part=="Clouds")
  weatherImage.style.backgroundImage ="url(clouds-night.jpg)";
   if(part=="Haze" && hr>=5 && hr<19)
    weatherImage.style.backgroundImage ="url(haze.jpg)";
   else if(part=="Haze")
  weatherImage.style.backgroundImage ="url(haze-night.jpg)";
  if(part=="Mist" && hr>=5 && hr<19)
  weatherImage.style.backgroundImage="url(mist.jpg)";
  else if(part=="Mist")
  weatherImage.style.backgroundImage="url(mist-night.jpg)";
   weatherImage.style.backgroundSize="cover";
   cityName1.innerHTML="";
   temp.innerHTML="";
   desc.innerHTML="";
   speed.innerHTML="";
   humidity.innerHTML="";
   cloudss.innerHTML="";
   
   temp.append(tempvalue);
   desc.append(descvalue);
   speed.append(speedvalue);
   humidity.append(humidityvalue);
   cloudss.append(cloudsvalue);
   cityName1.append(cityvalue1);
   city="";
 
}
async function weatherData()
{
   
    console.log(city);
    const store= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

     value1 =await store.json();
     dataHide.classList.add("active");
   showWeather();
}

let btnn=document.querySelector(".btn");

const Manual=document.querySelector(".manual");
const Current=document.querySelector(".current");
const activesearch=document.querySelector(".activeSearch");
const activecurrent=document.querySelector(".activeCurrent")
activesearch.addEventListener('click',()=>{
  Manual.classList.add("active");
  Current.classList.add("inactive");
})
activecurrent.addEventListener('click',()=>{
  Manual.classList.remove("active");
  Current.classList.remove("inactive");
  dataHide.classList.remove("active");
  getLocation();
})

let input=document.querySelector("#button");

input.addEventListener("keypress",function(event)
{
  if(event.key==="Enter")
  {
    event.preventDefault();
    btnn.click();
  }
})

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
 console.log("Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude);
  latitude=position.coords.latitude;
  longitude=position.coords.longitude;
  weatherData1();
}
getLocation();

async function weatherData1()
{
  const store1=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`);

   value2= await store1.json();
   console.log(value2);
  showWeather1();
}
function showWeather1()
{
    let temp1=document.querySelector(".temp1");
    let tempvalue1= `Temperature:-${value2?.main?.temp.toFixed(2)} C`;
   console.log(tempvalue1);
   let desc=document.querySelector(".desc1");
   let descvalue=value2?.weather?.[0]?.description;
   console.log(descvalue);
    let speed11=document.querySelector(".windvalue");
   let speedvalue =`${value2?.wind?.speed.toFixed(2)} Km/H`;
   let humidity=document.querySelector(".humidity1value");
   let humidityvalue =`${value2?.main?.humidity.toFixed(2)} %`;
   let clouds1=document.querySelector(".cloudsvalue")
   let cloudsvalue1=`${value2?.clouds?.all.toFixed(2)} %`;
   let cityName=document.querySelector(".cityname1");
   let cityvalue=value2?.name;
   const d = new Date();
   let hr=d.getHours();
   let part=value2?.weather?.[0]?.main;
   console.log(hr+" "+part);
   let weatherImage=document.querySelector(".weatherimage1");
     console.log(part);
   if(part=="Rain" && hr>=5 && hr<19)
    weatherImage.style.backgroundImage ="url(rain.png)";
  else if(part=="Rain")
  weatherImage.style.backgroundImage ="url(rain-night.jpg)";
    if(part=="Clear" && hr>=5 && hr<19)
    weatherImage.style.backgroundImage ="url(clear.jpg)";
  else if(part=="Clear")
    weatherImage.style.backgroundImage ="url(clear-night.jpg)";
   if(part=="Clouds" && hr>=5 && hr<19)
    weatherImage.style.backgroundImage ="url(clouds.jpg)";
  else if(part=="Clouds")
  weatherImage.style.backgroundImage ="url(clouds-night.jpg)";
   if(part=="Haze" && hr>=5 && hr<19)
    weatherImage.style.backgroundImage ="url(haze.jpg)";
   else if(part=="Haze")
  weatherImage.style.backgroundImage ="url(haze-night.jpg)";
  if(part=="Mist" && hr>=5 && hr<19)
  weatherImage.style.backgroundImage="url(mist.jpg)";
  else if(part=="Mist")
  weatherImage.style.backgroundImage="url(mist-night.jpg)";
   weatherImage.style.backgroundSize="cover";
   cityName.innerHTML="";
   temp1.innerHTML="";
   desc.innerHTML="";
   speed11.innerHTML="";
   humidity.innerHTML="";
   clouds1.innerHTML="";
   city="";
  
   temp1.append(tempvalue1);
   desc.append(descvalue);
   speed11.append(speedvalue);
   humidity.append(humidityvalue);
   clouds1.append(cloudsvalue1);
   cityName.append(cityvalue);
}
const d = new Date();
let hr=d.getHours();
let changebg=document.querySelector(".datahide1");
let changebg1=document.querySelector(".manual");
if(hr>=5 && hr<10)
{
  changebg.style.backgroundImage="url(sunrise.jpg)";
  changebg1.style.backgroundImage="url(sunrise.jpg)";
  let ch=document.querySelectorAll(".changecolor");
  // ch.style.color="white";
}
else if(hr>=10 && hr<17)
{
  changebg.style.backgroundImage="url(sunshine.webp)";
  changebg1.style.backgroundImage="url(sunshine.webp)";
  let ch=document.querySelectorAll("h3");
  ch.style.color="Black";
}
else if(hr>=17 && hr<19)
{
  changebg.style.backgroundImage="url(sunset.jpg)";
  changebg1.style.backgroundImage="url(sunset.jpg)";
}
else
{
  changebg.style.backgroundImage="url(moon.jpg)";
  changebg1.style.backgroundImage="url(moon.jpg)";
}
changebg.style.backgroundSize="cover";
changebg1.style.backgroundSize="cover";
