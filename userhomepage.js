let bankQueue
let bankQueueElement = document.querySelector(`.bank-queue`)
getCookie()
bankQueueElement.innerText = bankQueue

let userQueue = document.querySelector(`.queue`)

document.querySelector(`#insertQueueUser`).addEventListener(`click`, function(ev){
    userQueue.innerText = prompt(`Insira a senha`)
})

function getCookie(){
    let bankQueueCookie = document.cookie
    let cookieName= bankQueueCookie.split(`bankQueueCookie=`)
    let cookieValue = cookieName.pop()
    return bankQueue =  cookieValue
}



