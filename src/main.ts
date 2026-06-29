import './style.css'
import { Window } from './components/Window'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('App root not found')
}

app.innerHTML = Window()

const status = document.querySelector<HTMLParagraphElement>('#status-text')

if (!status) {
    throw new Error('Status element not found')
}

const ratings: Record<string, string> = {

    "1":"🗑️ В корзине что-то появилось",

    "2":"🤧 Носяра шмыгает",

    "3":"✝️ Прости, Господи...",

    "4":"🩳 Наши штаны сухи, капитан",

    "5":"👑 Уфф... уфф... уфф..."

}

window.addEventListener("keydown",(event)=>{

    const text = ratings[event.key]

    if(text){

        status.textContent = text

    }

})