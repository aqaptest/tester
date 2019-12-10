//Get Checkbox Count form box
var block = document.querySelectorAll("[id='qualifierBox']:nth-child(1)")[0];
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
var stcolor = document.querySelectorAll(".qualifier-box.inner-box.qualifier") ;
stcolor = stcolor[0].getAttribute("class");
if (stcolor.indexOf("green")!==-1 && c===ck.length) {
  console.log("True");
} else if (stcolor.indexOf("grey")!== -1 && c===0 ) {
  console.log("True");
} else if (stcolor.indexOf("yellow")!== -1 && c<=ck.length ) {
  console.log("True");
} else {
  console.log("Qualifer Color is not as expected");
}

