const anchor = document.querySelectorAll(".navMenu")
const scrollContainer = document.querySelector(".mainContainer")
const slide = document.querySelectorAll(".content")
const scrollContainerArr = ["0", "-800px", "-1600px", "-2400px", "-3200px", "-4000px", "-4800px"]

for (let i = 0; i < anchor.length; i++) {
    anchor[i].onclick = (e) => {
        e.preventDefault()
        scrollContainer.style.left = scrollContainerArr[i]
    }
}

for (let i = 0; i < slide.length; i++) {
    slide[i].onclick = (e) => {
        scrollContainer.style.left = scrollContainerArr[i]
    }
}