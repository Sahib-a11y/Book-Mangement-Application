let form =  document.getElementById("book-form")

function clearallfiled(){
    title.value = "";
    author.value = "";
    isbn.value = ""
}

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

function getElementByIdname(parameterer){
    return document.querySelector('#title'+parameterer).value
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let title = querySelector('title')
    let author =  querySelector('author')
    let isbn = querySelector('isbn')
    addtotable(title,author,isbn)
})
