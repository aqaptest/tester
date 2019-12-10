
var block = document.querySelectorAll("[id='qualifierBox']:nth-child(1)")[1];
//Get Checkbox Count form box
var ck = block.querySelectorAll('#iseeit-qm-modal-multi-picklist-status > input');
var checkbox = 1;
var c = 0;
for (var i = 0; i < ck.length; i++) {
  if (ck[i].getAttribute("class").indexOf("ng-empty") === -1) {
    c = c + 1
  }
}


if (c === checkbox) {
  console.log("True");
}
else {
  throw Error("Check box count is different than expected");
}


var block = document.querySelectorAll("[id='qualifierBox']:nth-child(1)")[4];
var singleblock = block.querySelectorAll('.slds-media__body')[0];
var ck = singleblock.children[1].querySelectorAll('.slds-checkbox input');
var checkbox = 1;
var c = 0;
for (var i = 0; i < ck.length; i++) {
  if (ck[i].getAttribute("class").indexOf("ng-empty") === -1) {
    c = c + 1
  }
}
if (c === checkbox) {
  return True;
}
else {
  console.log("checkbox_org:"+ c +"Checkbox_count_def:"+ checkbox);
  throw Error("Check box count is different than expected");
}


//for Deal sheet
var checkbox = 2;
var block = document.querySelectorAll("#resizing")[1];
//Get Checkbox Count form box
var ck = block.querySelectorAll('#iseeit-qm-modal-multi-picklist-status > input');
var i;
var c = 0;
for (i = 0; i < ck.length; i++) {
	if (ck[i].getAttribute("class").indexOf("ng-empty") === -1)
	{
	c = c + 1
	}
  }
    if (c === checkbox) {
        console.log("True");
      }
       else {
        throw Error("Check box count is different than expected");
      }