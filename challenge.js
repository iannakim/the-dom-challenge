//1. As a user, i should see the timer increment every second once the page has loaded
//2. As a user, i can manually increment and decrement the counter as i like
//3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
//4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
//5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"


const counter = document.querySelector("h1#counter")
const addBtn = document.getElementById("+")
const minusBtn = document.getElementById("-")
const likeBtn = document.getElementById("<3")
const pauseBtn = document.getElementById("pause")
const likeUl = document.querySelector("ul.likes")
const commentsDiv = document.querySelector("div#list.comments")
const commentForm = document.querySelector("form#comment-form")


document.addEventListener("DOMContentLoaded", () => {
    ticktock()
})

let timer;

function ticktock(){
   timer = setInterval(function(){
    counter.innerText = parseInt(counter.innerText) + 1
   }, 1000);}




addBtn.addEventListener('click', (event) => {
    counter.innerText = parseInt(counter.innerText) + 1
})

minusBtn.addEventListener('click', (event) => {
    if (parseInt(counter.innerText) > 0) {
        counter.innerText = parseInt(counter.innerText) - 1
    }
})

likeBtn.addEventListener('click', (event) => {
    let clickedTime = counter.innerText
    let likeLi = document.createElement('li')
    likeLi.innerText = `You liked the number ${clickedTime}`
    likeUl.append(likeLi)

    //grab the counter.innerText and save it. 
    // create a LikeLi and fill the innerText with the counter# through interpolaion
    //append the LikeLi to LikeUl
})



pauseBtn.addEventListener('click', (event) => {
    
    if (pauseBtn.innerText == "pause"){
    clearInterval(timer)
    pauseBtn.innerText = "resume"
    minusBtn.disabled = true; 
    addBtn.disabled = true; 
    likeBtn.disabled = true;
    }
    else {
    ticktock()
    pauseBtn.innerText = "pause"
    minusBtn.disabled = false; 
    addBtn.disabled = false; 
    likeBtn.disabled = false;
    }
})


commentForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    let comment = event.target.querySelector("input").value
    let commentLi = document.createElement('li')
    commentLi.innerText = comment
    commentLi.className = "comment-item"
    commentsDiv.append(commentLi)
    event.target.reset()
})