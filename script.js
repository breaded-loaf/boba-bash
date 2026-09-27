let count = 0

const countElement = document.getElementById("count")
const cookieElement = document.getElementById("Earth")
const messegeElement = document.getElementById("messege-after-clicks")
const facts = [
    "Did you know the Earth is Round?",
    "Earth is the only place in the solar system where water can be present in all the three states, solid, liquid and gas.",
    "The Earth is flat?",
    "The Earth is the third planet from the Sun.",
    "The Earth has one natural satellite, the Moon.",
    "The Earth is approximately 4.54 billion years old.",
    "The Earth's atmosphere is composed mainly of nitrogen and oxygen.",
    "The Earth has a magnetic field that protects it from solar wind.",
    "The Earth's surface is covered by about 71% water.",
    "The Earth has a diverse range of ecosystems and habitats.",
    "The Earth's rotation causes the cycle of day and night.",
    "The Earth's orbit around the Sun causes the seasons.",
    "The Earth has a tilted axis, which contributes to the changing seasons."
]
const randomIndex = Math.floor(Math.random() * facts.length)

function updateMessage() {
    if (count % 10 === 0 && facts.length > 0) {
        const randomIndex = Math.floor(Math.random() * facts.length)
        messegeElement.style.display = "block";
        messegeElement.textContent = facts[randomIndex];
    }
}

function incrementCount() {
    count++
    countElement.textContent = "Count: " + count
    updateMessage()


}
cookieElement.addEventListener("click", incrementCount)
