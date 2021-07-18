

/*fetch('https://jsonplaceholder.typicode.com/posts').then(function (response){
  //  return response.json();
  console.log(response, 'response')
}).then (function (body){
    //document.getElementsByClassName('date-container')[0].innerHTML;
    console.log(body, 'body');
    document.querySelector()
}).catch(function (error){
    console.log('something went wrong');
    console.error(error);
});
*/





/*fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
    return response.json();
}).then (function(obj){
    
  // document.getElementById('container-1').innerHTML = userID.map(user => 
   // `<div>
    //  <div>UserID: ${user.id}</div>
     // <div>Title: ${user.title}</div>
     // <div>Body: ${user.body}</div>
      
    //</div>`
//).join('')
 //  console.log(obj);
//}).catch(function(error){
   // console.error("something went wrong with retrieving people");
   // console.error(error)
//});

function(obj){
    /*for (let i = 0; i < response.length; i++) {
        console.log(response[i].id);
        console.log(response[i].userID);
        console.log(response[i].title);
      }*/
      //let  myJSON = JSON.stringify(obj);
   //console.log(myJSON);
   fetch ('https://jsonplaceholder.typicode.com/posts'). then( function (response){
    console.log(response);
    document.getElementById('container-2')[0].innerHTML= user.id;
    document.getElementById('container-3')[1].innerHTML= user.userId;
    document.getElementById('container-4')[2].innerHTML= user.title;
    document.getElementById('container-5')[3].innerHTML= user.body;
    //console.log( response.json(user));
}).then (function (userID){
            document.getElementById('conatiner-1').innerHTML = userID.map(user => 
                `<div>
                  <div>Id: ${user.id}</div>
                  <div>User Id: ${user.userId}</div>
                  <div>Title: ${user.title}</div>
                  <div>Body: ${user.body}</div>
                </div>`
            ).join('') 
});
//join('') removes comma after every item of array, check effect on browser by removing this function

//document.getElementsByClassName('container-1')[0].userId;