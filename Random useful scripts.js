//Input Value including special charecters in to Text Area Box
var element = $('div.slds-form-element > div.slds-form-element__control > textarea.slds-textarea')[0];
element.value = "test ö+#ü%$éè";
var event = new Event('input', {
	bubbles: true
});
element.dispatchEvent(event);


//Input test in to Text Area Box
var element = $('div.slds-form-element > div.slds-form-element__control > textarea.slds-textarea')[0];
element.value = "123";
var event = new Event('input', {
	bubbles: true
});
element.dispatchEvent(event);

//Scroll Window
window.scrollTo(0,800);

//loader-class.update-task-modal-visible.ng-scope