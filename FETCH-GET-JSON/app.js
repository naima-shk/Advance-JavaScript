

fetch('people.json').then(function (response){
    return response.json();
}).then (function (obj){
    console.log(obj);
}).catch(function (error){
    console.log('something went wrong');
    console.error(error);
});