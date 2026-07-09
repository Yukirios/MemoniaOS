import { EvaluationController } from "../session/EvaluationController";

export class KeyboardController {

    static enable() {

        window.addEventListener("keydown", (event) => {

            EvaluationController.evaluate(event.key);

        });

    }

}