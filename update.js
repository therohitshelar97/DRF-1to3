
s = window.location.href 

d = s.substr(-2,2)

d = parseInt(d)


url1 = `http://127.0.0.1:8000/updatefetch/${d}`
a = ''
fetch(url1)
.then(re=>re.json())
.then(da=>{
    a = `
         <form action="">
          id : <input type='number' id='id1' value='${da['id']}' />
          <br>
          
          name : <input type='text' id='name' value='${da['name']}' />
          <br>
          age : <input type='number' id='age' value='${da['age']}' />
          <br>
          city : <input type='text' id='city' value='${da['city']}' />
         </form>
    `
    document.getElementById('fm').innerHTML = a;
})




function Update(){

    url = 'http://127.0.0.1:8000/update/'
    id12 = document.getElementById('id1').value
    name1 = document.getElementById('name').value
    age = document.getElementById('age').value
    city = document.getElementById('city').value

data = {

   

    id:id12,
    name : name1,
    age : age,
    city : city,
    // image : 'abc/p.jpg'
}



fetch(url,{
    method : 'PUT',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(data)
})
window.location.href = 'http://localhost:52330/fetch.html'
}




