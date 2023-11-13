let bankQueueElement = document.querySelector(`.queue`)
let existentCookie // Value from an already existent cookie
getCookie()
bankQueueElement.innerText = existentCookie
let date = new Date()
date.setDate(date.getDate() + 1)
document.cookie = `bankQueueCookie = ${existentCookie}; expires=${date}; SameSite=none; Secure`
let bankQueue = Number(document.querySelector(`.queue`).innerText)
// Buttons

document.querySelector(`#nextQueue`).addEventListener(`click`, function(ev){
   bankQueueElement.innerText = bankQueue += 1
   document.cookie = `bankQueueCookie = ${bankQueue}`
})

document.querySelector(`#previousQueue`).addEventListener(`click`, function(ev){
    bankQueueElement.innerText = bankQueue -= 1
    document.cookie = `bankQueueCookie = ${bankQueue}`
})

document.querySelector(`#insertQueue`).addEventListener(`click`, function(ev){
    bankQueue = Number(prompt(`Inserir senha atual:`))
    bankQueueElement.innerText = bankQueue 
    document.cookie = `bankQueueCookie = ${bankQueue}`
})

document.querySelector(`#resetQueue`).addEventListener(`click`, function(ev){
    bankQueue = 1
    bankQueueElement.innerText = bankQueue
    document.cookie = `bankQueueCookie = ${bankQueue}`
})


function getCookie(){
    let bankQueueCookie = document.cookie
    let cookieName= bankQueueCookie.split(`bankQueueCookie=`)
    let cookieValue = cookieName.pop()
    return existentCookie =  cookieValue
}
