// xml request 
// const request = new XMLHttpRequest();
// request.open("GET",  "https://jsonplaceholder.typicode.com/users");
// request.send();
// request.onload = () =>{
//     if(request.status === 200){
//         console.log(JSON.parse(request.response));
//     }else{
//         console.log(`error ${request.status}`);
//     }
// }


// fetch api (i)

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//     return response.json();
// }).then(json=>{
//    // console.log(json);
// })

// fetch api (ii)

// async function getUsers(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
//     return data;
// }
// getUsers().then(response =>{
//     console.log(response);
// })
