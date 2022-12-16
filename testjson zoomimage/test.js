// xml request
// const request = new XMLHttpRequest();
// request.open("GET","https://jsonplaceholder.typicode.com/users");
// request.send();
// request.onload = () =>{
//     if(request.status === 200){
//        console.log(request.response);
//     }else{
//          console.log(`error ${request.status}`);
//     }
// }


// fetch method (i)

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//     return response.json();
// }).then(json =>{
//     console.log(json);
//    for ( var x in json){
//     document.write(json[x].name,"------", json[x].address.street,"------",json[x].company.catchPhrase);
//     document.write("<br>");
//    }
// })


// fetch method (ii)
var obj=[
    { 
        title: 'foo',
        body: 'bar',
        userId: 1
    },
    {
        title: 'hello',
        body: 'baby',
        userId: 2
    },
    {
        title: 'kundan',
        body: 'roy',
        userId: 3
    },
    {
        title: 'rahul',
        body: 'kumar',
        userId: 4
    },
    {
        title: 'kreethy',
        body: 'shai',
        userId: 5
    },
    {
        title: 'manish',
        body: 'kaship',
        userId: 6
    }
]


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then((response) =>{ 
    return response.json()
})
  .then((json) => {
    console.log(json);
    for(var x in json)
    document.write(json[x].title,json[x].body,"<br>");
    //document.write("<br>");
});

