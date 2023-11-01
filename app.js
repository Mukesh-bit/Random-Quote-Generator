const btn = document.querySelector(".btn")
const quote = document.querySelector("#quote-text")
const author = document.querySelector(".author")

const getQuote = async () => {

    try {

        quote.innerHTML = "Loding..."
        author.style.display = "none"

        btn.innerHTML = "Loading..."
        btn.disabled = true

        const res = await fetch(`https://api.quotable.io/quotes/random`)
        const data = await res.json()

        author.style.display = "block"


        quote.innerHTML = data[0].content

        author.innerHTML = `~ ${data[0].author}`

        btn.innerHTML = "Get a quote"
        btn.disabled = false
    } catch (error) {
        quote.innerHTML = "An error happend, try after sometime!"
        author.style.display = "none"
        btn.innerHTML = "Get a quote"
        btn.disabled = false
    }



}

btn.addEventListener("click", getQuote)