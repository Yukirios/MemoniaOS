import { BootScreen } from "../components/BootScreen";
import { Window } from "../components/Window";
import { RatingCard } from "../components/RatingCard";

import { bootMessages } from "../data/messages";
import { RatingService } from "../services/RatingService";

export function startApplication() {

    const app = document.querySelector<HTMLDivElement>("#app");

    if (!app) {
        throw new Error("App root not found");
    }

    showBootScreen(app);

}

function showBootScreen(app: HTMLDivElement) {

    const randomMessage =
        bootMessages[Math.floor(Math.random() * bootMessages.length)];

    app.innerHTML = BootScreen(randomMessage);

    const progress =
        document.querySelector<HTMLDivElement>("#boot-progress");

    if (!progress) {
        throw new Error("Boot progress not found");
    }

    let value = 0;

    const timer = setInterval(() => {

        value += 10;

        progress.style.width = `${value}%`;

        if (value >= 100) {

            clearInterval(timer);

            showWindow(app);

        }

    }, 120);

}

function showWindow(app: HTMLDivElement) {

    app.innerHTML = Window();

    initializeApp();

}

function initializeApp() {

    const container =
        document.querySelector<HTMLDivElement>("#rating-container");

    if (!container) {
        throw new Error("Rating container not found");
    }

    window.addEventListener("keydown", (event) => {

        const rating = RatingService.getByKey(event.key);

        if (!rating) return;

        container.innerHTML = "Чем это так пахнет?...";

        setTimeout(() => {

            container.innerHTML = RatingCard(rating);

        }, 1000);

    });

}