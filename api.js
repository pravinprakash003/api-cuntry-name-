const request = new XMLHttpRequest();
request.open("get","https://restcountries.eu/rest/v2/all");
request.send();
request.onload  = () =>{
    // try {
    //     console.log(request)
    // } catch (error) {
    //     console.log(error)
    //    }
    
    if(request.status === 200){
        var res = JSON.parse(request.response);
        console.log(res)
        res.forEach(function(value,key){
            // console.log(`${value.name}`);
            // document.getElementById('name').innerHTML = `${value.name}`;
            // document.getElementById('01').appendChild=`${value.name1}`;
            var node = document.createElement("li");
            var textnode = document.createTextNode(`${value.name }`);
            node.appendChild(textnode);
            document.getElementById("name").appendChild(node);
            var flag = document.createElement("img");
            
            flag.setAttribute("src",value.flag);
            flag.setAttribute("height","100px");
            flag.setAttribute("width","100px");
            console.log(flag);
            document.getElementById("name").appendChild(flag);
            

            
        });
    }else{
        console.log(`error ${request.status}`);
    }
}  


 

// fetch api

// fetch("https://restcountries.eu/rest/v2/name/united")
// .then(response=>{
//     return response.json();
// }).then(json=>{
//     console.log(json);
// })

// // //second approach
// async function getUsers(){
//     let response = await fetch("https://restcountries.eu/rest/v2/name/united");
//     let data = await response.json();
//     return data;
// }

// getUsers().then(response=>{
//     console.log(response)
// })

// //Axios- third party javascript library
// axios.get("https://restcountries.eu/rest/v2/name/united")
// .then(response=>{
//     console.log(response.data);
// })

// //jquery 

// $(document).ready(function(){
//     $.ajax({
//         url:"https://restcountries.eu/rest/v2/name/united",
//         type:"get",
//         success:function(result){
//             console.log(result)
//         },
//         error:function(err){
//             console.log(err);
//         }
        
        
//     })
// })

