import './style.css'
import { Window } from './components/Window'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('App root not found')
}

app.innerHTML = Window()