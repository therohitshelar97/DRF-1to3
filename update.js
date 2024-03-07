url = 'http://127.0.0.1:8000/update/'

data = {
    id:36,
    name : 'Rohit',
    age : 40,
    city : 'Mumbai',
    // image : 'abc/p.jpg'
}



fetch(url,{
    method : 'PUT',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(data)
})
