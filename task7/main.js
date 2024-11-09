let heroImage = document.getElementById("hero-image")
let heroTitle = document.getElementById("hero-title")
let heroIntelligence = document.getElementById("hero-intelligence")
let heroStrength = document.getElementById("hero-strength")
let heroSpeed = document.getElementById("hero-speed")
let heroDurability = document.getElementById("hero-durability")
let heroPower = document.getElementById("hero-power")
let heroCombat = document.getElementById("hero-combat")
let heroGender = document.getElementById("hero-gender")
let heroRace = document.getElementById("hero-race")
let heroPlaceOfBirth = document.getElementById("hero-placeOfBirth")
let heroDescription = document.getElementById("hero-description")

let heroes;

async function fetchAllHeroes(){
    let url = "https://akabab.github.io/superhero-api/api/all.json"

    try{
        let response = await fetch(url)

        heroes = await response.json()

        configureRandomHero()
    }
    catch{
        console.log('Getting some error $(error)')
    }
}

function onButtonClick(){
    configureRandomHero()
}

function configureRandomHero(){
    let randomIndex = Math.floor(Math.random() * 562)
    let FirstHero = heroes[randomIndex]

    heroTitle.innerText = "Name: " + FirstHero.name
    heroDescription.innerText = "First appearance: " + FirstHero.biography.firstAppearance
    heroIntelligence.innerText = "Intelligence: " + FirstHero.powerstats.intelligence
    heroStrength.innerText = "Strength: " + FirstHero.powerstats.strength
    heroSpeed.innerText = "Speed: " + FirstHero.powerstats.speed
    heroDurability.innerText = "Durability: " + FirstHero.powerstats.durability
    heroPower.innerText = "Power: " + FirstHero.powerstats.power
    heroCombat.innerText = "Combat: " + FirstHero.powerstats.combat
    heroGender.innerText = "Gender: " + FirstHero.appearance.gender
    heroRace.innerText = "Race: " + FirstHero.appearance.race
    heroPlaceOfBirth.innerText = "Place of birth: " + FirstHero.biography.placeOfBirth
    heroImage.setAttribute("src", FirstHero.images.md)
}

addEventListener("onload", fetchAllHeroes())