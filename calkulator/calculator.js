function calculate(){
  var bill_count = document.getElementById('bill_count').value;
  var service_quality = document.getElementById("service_quality").value;
  var people_num = document.getElementById("people_num").value;
  var currency = document.getElementById("currency").value;


if (!bill_count||bill_count===0){
  document.getElementById('bill_count').style.borderColor='red';
} else {
  document.getElementById('bill_count').style.borderColor='black' 
}
if (!service_quality||service_quality=='Choose..'){
  document.getElementById('service_quality').style.borderColor='red';
} else {
  document.getElementById('service_quality').style.borderColor='black' 
}
if(!people_num||people_num<=0){
   people_num=1;
   document.getElementById("people_num").value=people_num;
} else{
   document.getElementById("each").style.display ="block";
   document.getElementById('people_num').style.borderColor='black' 
}

switch (currency) {
  case ("₽"): currency = 1; break;
  case ("$"): currency = 72; break;
  case ("€"): currency = 82; break;
}
  var total = (bill_count * service_quality*currency) / people_num;
  
  total=Math.round(total*100)/100;
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display="block";
  document.getElementById('tip').innerHTML=total;
}


//hide tip element
document.getElementById("totalTip").style.display='none';
document.getElementById("each").style.display='none';

document.getElementById("calculate").onclick= function(){
  calculate();
  console.log("работаю");
}