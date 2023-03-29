const menu = document.querySelector("#ramen-menu")
const image = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const restaurant = document.querySelector(".restaurant")
const rating = document.querySelector("#rating-display")
const comment = document.querySelector("#comment-display")
const newRamen = document.querySelector("#new-ramen")
let globalRamen;
document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})

newRamen.addEventListener("submit", (e) => {
    addNewRamen(e)
})

function fetchData(){
    fetch("http://localhost:3000/ramens")
    .then((res)=> res.json())
    .then((data) => {
        data.forEach((ramenDish) => {
            displayRamen(ramenDish)
    })
        renderDetails(data[0])
    })
}

function displayRamen(ramenDish) {
    console.log(ramenDish)
    let img = document.createElement("img")
    img.src = ramenDish.image
    img.id = `id${ramenDish.id}`
    img.addEventListener("click", () => {
            renderDetails(ramenDish)
            globalRamen = ramenDish.id
        })
    menu.appendChild(img)
}

function renderDetails(ramenDish) {
    image.src = ramenDish.image
    ramenName.textContent = ramenDish.name
    restaurant.textContent = ramenDish.restaurant
    rating.textContent = ramenDish.rating
    comment.textContent = ramenDish.comment
} 

function addNewRamen(e){
    e.preventDefault();
    let newRamenReview = {
        name: document.querySelector("#new-name").value,
        restaurant: document.querySelector("#new-restaurant").value,
        image: document.querySelector("#new-image").value,
        rating: document.querySelector("#new-rating").value,
        comment: document.querySelector("#new-comment").value
        }
    displayRamen(newRamenReview)
}