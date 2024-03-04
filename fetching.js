fetch('http://127.0.0.1:8000/geting/')
.then(response=>response.json())
.then(data=>{
    // console.log(data[0]['name'])
    temp = ''
    count=0
    for(i=0;i<data.length;i++){
        count+=1
        temp += '<tr>'
        temp += `<td> ${count} </td>`
        temp += `<td> ${data[i]['id']} </td>`
        temp += `<td> ${data[i]['name']} </td>`
        temp += `<td> ${data[i]['age']} </td>`
        temp += `<td> ${data[i]['city']} </td>`
        temp += `<td> <img src='http://127.0.0.1:8000/${data[i]['image']}'  height='100' width='100' alt='path' /> </td>`
        temp += '</tr>'
       
    }
    // document.getElementById('t').innerHTML = temp
  
})