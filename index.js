let form =  document.getElementById("book-form")




function addtotable(title,author,isbn){
    let tbody = document.getElementById('book-list')
    let tr = document.createElement('tr')
    tbody.innerHTML = `
    <tr>
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    </tr>
    `
    tbody.appendChild(tr)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let title = document.querySelector('#title').value
    let author =  document.querySelector('#author').value
    let isbn = document.querySelector('#isbn').value
    addtotable(title,author,isbn)
})
