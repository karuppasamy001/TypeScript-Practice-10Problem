"use strict";
class Employee {
    constructor(age, gender, maritalStatus) {
        this.age = age.value;
        this.gender = gender.value;
        this.maritalStatus = maritalStatus.value;
    }
    checkPlaceOfService() {
        if (isNaN(Number(this.age))) {
            alert("Age must be Number");
            return "";
        }
        if (this.gender === 'none') {
            alert('Gender should be male or female');
            return "";
        }
        if (this.maritalStatus === 'none') {
            alert("Please Select Marital Status");
            return "";
        }
        if (this.gender === 'female')
            return `The Employee can able to work only in urban areas`;
        else {
            if (Number(this.age) >= 20 && Number(this.age) <= 40)
                return 'The Employee Can Work anywhere';
            else if (Number(this.age) >= 40 && Number(this.age) <= 60)
                return 'The Employee can work only in urban areas';
            else
                return "Error";
        }
    }
}
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const maritalStatus = document.getElementById("maritalStatus");
const outputForPlaceOfService = document.getElementById("output");
const buttonForPlaceOfService = document.getElementById("button");
buttonForPlaceOfService.addEventListener("click", () => {
    outputForPlaceOfService.innerHTML = "";
    const PlaceOfService = new Employee(age, gender, maritalStatus);
    outputForPlaceOfService.innerHTML = PlaceOfService.checkPlaceOfService();
});
