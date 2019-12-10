//Test update
var test = document.querySelectorAll("[id='qualifierBox']:nth-child(1)")[0];
test.querySelectorAll('label[class="slds-checkbox"]')

//Get check box count
var ck = document.querySelectorAll("input[id='iseeit-qm-modal-checklist-status']");
var i;
var c = 0;
for (i = 0; i < ck.length; i++) { 
	if (ck[i].getAttribute("class").indexOf("ng-empty") === -1) 
	{
	c = c + 1
	}
    }
//Validate Qualifier Color Based on Checked box Count
var stcolor = document.querySelector("div[id='stone-detail']").getAttribute("class");
if (stcolor.indexOf("green")!==-1 && c===ck.length) {
  return("True");
} else if (stcolor.indexOf("grey")!== -1 && c===0 ) {
  return("True");
} else if (stcolor.indexOf("yellow")!== -1 && c<=ck.length ) {
  return("True");
} else {
  throw Error("Qualifer Color is not as expected");
}