import { RatingCard } from "./components/RatingCard.ts"
import { ratings } from "./data/ratings"
import './style.css'
import { Window } from './components/Window'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('App root not found')
}

app.innerHTML = Window()

const container = document.querySelector<HTMLDivElement>("#rating-container")

if (!container) {

    throw new Error("Rating container not found")

}



window.addEventListener("keydown", (event) => {
    const rating = ratings.find(r => r.key === event.key)
    if (rating) {
        container.innerHTML = "Чем это так пахнет?..."
        setTimeout(() => {
            container.innerHTML = RatingCard(rating)
        }, 1000)
    }
})