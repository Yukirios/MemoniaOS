import { BootScreen } from "../../components/BootScreen";
import { bootSequence } from "../../data/bootSequence";

export class BootController {

    static start(app: HTMLDivElement): Promise<void> {

        return new Promise((resolve) => {

            app.innerHTML = BootScreen(bootSequence[0].message);

            const message =
                app.querySelector<HTMLDivElement>("#boot-message");

            const progress =
                app.querySelector<HTMLDivElement>("#boot-progress");

            if (!message || !progress) {
                throw new Error("Boot elements not found");
            }

            let index = 0;

            this.renderStep(message, progress, index);

            const timer = window.setInterval(() => {

                index++;

                if (index >= bootSequence.length) {

                    clearInterval(timer);

                    resolve();

                    return;

                }

                this.renderStep(message, progress, index);

            }, 400);

        });

    }

    private static renderStep(

        message: HTMLDivElement,

        progress: HTMLDivElement,

        index: number

    ): void {

        const step = bootSequence[index];

        message.textContent = step.message;

        const percent =
            ((index + 1) / bootSequence.length) * 100;

        progress.style.width = `${percent}%`;

    }

}