import { BootController } from "./boot/BootController";
import { SessionController } from "./session/SessionController";
import { EvaluationController } from "./session/EvaluationController";
import { KeyboardController } from "./input/KeyboardController";

export async function startApplication() {

    const app = document.querySelector<HTMLDivElement>("#app");

    if (!app) {
        throw new Error("App root not found");
    }

    await BootController.start(app);

    SessionController.start(app);

    EvaluationController.initialize(app);

    KeyboardController.enable();

}