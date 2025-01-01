function validationForm()
{
	var name=document.myForm.firstname.value;
	if name=="firstname"||name==null)
{
	alert("first name must be filled out");
	var firstnameField=document.getElementById('firstNameField.focus();');
	firstnameField.focus();
	return false;
}
var name=document.myForm.lastname.value;
if name=="lastname"||name==null)
{
	alert("last name must be filled out");
	var firstNameField=document.getElementById('lastname');
	firstNameField.focus();
	return false;
}
var name=document.myForm.address.value;
if name="address"||name==null)
{
	alert("address must be filled out");
	var firstNameField=document.getElementById('address');
	firstNameField.focus();
	return false;
}
var name = document.myForm.dob.value;
if (name=="dob" || name==null)
{
	alert("Select Date of Birth");
    var firstNameField = document.getElementById("dob");
    firstNameField.focus();
    return false;
}
var name = document.myForm.gender.value;
if (name=="gender" || name==null) {
alert("Select Gender");
var firstNameField = document.getElementById("gender");
firstNameField.focus();
return false;
}
var name = document.myForm.phonenumber.value;
var mobileRegex = /^[6-9]\d{9}$/;
if (name == "phonenumber" || name == null) {
alert("Enter Mobile Number");
var firstNameField = document.getElementById("phonenumber");
firstNameField.focus();
return false;
} else if (!mobileRegex.test(name)) {
alert("Enter valid Mobile Number");
var firstNameField = document.getElementById("phonenumber");
firstNameField.focus();
return false;
}
}