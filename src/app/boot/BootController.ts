import { BootScreen } from "../../components/BootScreen";
import { Window } from "../../components/Window";

import { bootMessages } from "../../data/messages";

import { EvaluationController } from "../session/EvaluationController";
import { KeyboardController } from "../input/KeyboardController";

export class BootController {

    static start(app: HTMLDivElement) {

        const message =
            bootMessages[Math.floor(Math.random() * bootMessages.length)];

        app.innerHTML = BootScreen(message);

        const progress =
            app.querySelector<HTMLDivElement>("#boot-progress");

        if (!progress) {
            throw new Error("Boot progress not found");
        }

        let value = 0;

        const timer = setInterval(() => {

            value += 10;

            progress.style.width = `${value}%`;

            if (value >= 100) {

                clearInterval(timer);

                app.innerHTML = Window();

                EvaluationController.initialize(app);

                KeyboardController.enable();

            }

        }, 120);

    }

}