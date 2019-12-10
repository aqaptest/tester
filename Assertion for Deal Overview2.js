//Select the Block
var block = document.querySelectorAll("[id='qualifierBox']:nth-child(1)")[1];
//Get Checkbox Count form box
var ck = block.querySelectorAll('label[class="slds-checkbox"]>input');
var i;
var c = 0;
for (i = 0; i < ck.length; i++) { 
	if (ck[i].getAttribute("class").indexOf("ng-empty") === -1) 
	{
	c = c + 1
	}
    }
//Validate Qualifier Color Based on Checked box Count || Change Stcolor index to change block
var stcolor = block.querySelectorAll(".qualifier-box.inner-box.qualifier") ;
stcolor = stcolor[0].getAttribute("class");
if (stcolor.indexOf("green")!==-1 && c===ck.length) {
  return("True");
} else if (stcolor.indexOf("yellow")!== -1 && c<ck.length ) {
  return("True");
} else if (stcolor.indexOf("grey")!== -1 && c===0 )  {
  return("True");
} else {
  throw ("Error: Qualifer Color is not as expected");
}


var links = document.querySelectorAll("td > a");
for (i = 0; i < links.length; i++) {
    console.log("https://app.cloudqa.io" + links[1].getAttribute("href"));
}