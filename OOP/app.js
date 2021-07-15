//object literal syntax
let details = {
  name: "naima",
  age: 25,
  data: function () {
    console.log("data");
  },
};
console.log(details.age);
details.data();

///factory function
function myDetails(name, age) {
  return {
    name,
    age,
    data: function () {
      console.log("true");
    },
  };
}
let details = myDetails("naima");
details.data();

//constructor function
function Details(name, age) {
  this.name = name;
  this.age = age;
  this.data = function () {
    //onsole.log('true')
  };
}
let other = new Details("naima", 25);
