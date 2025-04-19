const fetchData = () => {
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then(res => {
                return res.json()
        })
        .then(data => {
                pEl.textContent = data.value
        })
}


const imgEl = document.getElementById("img-el")
const buttonEl = document.getElementById("button-el")
const pEl = document.getElementById("p-el")

buttonEl.addEventListener("click", () => {
         fetchData()
})