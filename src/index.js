import "./styles.css";
function globalFullname() {
  return this.firstName + " " + this.lastName;
}
var person = {
  firstName: "Lary",
  lastName: "gold",
  fullName: function (a, b) {
    return this.firstName + " " + this.lastName + a + "-" + b;
  }
};
var person1 = {
  firstName: "John",
  lastName: "Doe"
};
var calle = globalFullname.call(person1);
document.getElementById("app1").innerHTML =
  calle + "--this from global function/method with call";

var applye = person.fullName.apply(person1, [1, 2]);
document.getElementById("app2").innerHTML =
  applye +
  "--this from mexthod of obj persodn1 with apply and pass params [1,2]in array";

var binde = person.fullName.bind(person1, 1, 2);
document.getElementById("app3").innerHTML =
  binde() +
  "-- ,this from  method of obj person1 with bind and pass params 1,2 with coma same to pass param we can use in applay but here we need to pass bind function with ()"; //*result John Doe1-2*/
var directCall = person.fullName(1, 2);
document.getElementById("app4").innerHTML =
  directCall +
  "-- ,this from  method of obj person1 with bind and pass params 1,2 with coma same to pass param we can use in applay but here we need to pass bind function with ()"; //*result John Doe1-2*/
