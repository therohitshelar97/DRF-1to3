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
        temp += `
                  <td>
                     <form action="" >
                       <input type="number" id="id" value="${data[i]['id']}" class="d-none" />
                       <input type="submit" value="Delete" onclick="Delete()" class="btn btn-danger" />
                     </form>
                  </td>
                  `
        temp += '</tr>'
       
    }
    document.getElementById('t').innerHTML = temp
  
})

function Delete(){

    id1 = document.getElementById('id').value
    id1 = parseInt(id1)
    url = `http://127.0.0.1:8000/delete/${id1}`

    fetch(url)
}