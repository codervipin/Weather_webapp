var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
//var main = document.querySelector('.cntry');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric'+'&appid=9fc8b61fa73489053ec9964ac957b30c')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var cntry   = data['sys']['country'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue +" , "+ cntry  ;
  //main.innerHTML = cntry;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue+ "<span>&#176;</span>" +"C";
  input.value ="";

  console.log(data);

})

.catch(err => alert("Wrong city name!"));
})
