url = 'http://127.0.0.1:8000/geting/'

data = {
    name : 'abcdefg',
    age : 38,
    city : 'Mumbai',
    // image : 'abc'
}

console.log(data)

fetch(url,{
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(data)
})
.then(response=>response.json())
.then(re=>{
    console.log(re)
})