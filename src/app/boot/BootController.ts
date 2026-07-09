import { BootScreen } from "../../components/BootScreen";
import { bootMessages } from "../../data/messages";

export class BootController {

    static start(app: HTMLDivElement): Promise<void> {

        return new Promise((resolve) => {

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

                    resolve();

                }

            }, 120);

        });

    }

}