import { RatingCard } from "./components/RatingCard.ts"
import { RatingService } from "./services/RatingService";
import './style.css'
import { Window } from './components/Window'
import { BootScreen } from "./components/BootScreen";
import { bootMessages } from "./data/messages";

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('App root not found')
}

function initializeApp() {

    const container =
        document.querySelector<HTMLDivElement>("#rating-container")

    if (!container) {

        throw new Error("Rating container not found")

    }

    window.addEventListener("keydown", (event) => {

        const rating = RatingService.getByKey(event.key)

        if (!rating) return

        container.innerHTML = "Чем это так пахнет?..."

        setTimeout(() => {

            container.innerHTML = RatingCard(rating)

        }, 1000)

    })

}

const randomMessage =
    bootMessages[Math.floor(Math.random() * bootMessages.length)]

app.innerHTML = BootScreen(randomMessage)

let value = 0

const progress = document.querySelector<HTMLDivElement>("#boot-progress")



const timer = setInterval(() => {

    value += 10

    if (progress) progress.style.width = `${value}%`

    if (value >= 100) {

        clearInterval(timer)

        app.innerHTML = Window()

        initializeApp()
        // Initialize application logic
    }

}, 120)

