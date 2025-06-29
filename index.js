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

function getElementByIdname(parameter){
    return document.querySelector('#'+parameter).value
}

function clearallfiled(){
    document.querySelector("#title").value=''
    document.querySelector("#author").value=''
    document.querySelector("#isbn").value=''
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let title = getElementByIdname('title')
    let author =  getElementByIdname('author')
    let isbn = getElementByIdname('isbn')
    addtotable(title,author,isbn)
    clearallfiled("")
})
