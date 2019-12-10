//Get tasks coun't and activity meter count
var task = document.querySelector(".count-task").innerText;
var ele = document.querySelectorAll("div[title='Activity Meter']");
meter = 0;
for (i = 0; i < ele.length; i++) {
	if (ele[i].getAttribute('class').indexOf('activeCoverage') !== -1) {
		  meter = meter + 1 ;
	} 	
}
meter = meter/2;
//Validate Activity Meter bar Count
var stcolor = document.querySelector("div[id='stone-detail']").getAttribute("class");
if ( task >= 9 && meter === 3) {
  return("True");
} else if (task >= 6 && meter === 2) {
  return("True");
} else if (task >= 3 && meter === 1 ) {
  return("True");
} else if (task <= 3 && meter === 0 ) {
    return("True");
}
else {
  throw ("false");
}