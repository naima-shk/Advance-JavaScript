function Car(name) {
    this.name = name
}
let app = new Car('Civic')
console.log(app.name);
function doSomething(a, b) {
    // adds a propone property to the Window object
     this.propone = "test value"; 
 }
// function invocation
doSomething(); 
console.log(window.propone);






console.log(window.name);