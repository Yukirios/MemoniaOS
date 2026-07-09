import { EvaluationController } from "../session/EvaluationController";

export class KeyboardController {

    static enable() {

        window.addEventListener("keydown", this.onKeyDown);

    }

    private static onKeyDown(event: KeyboardEvent) {

        EvaluationController.evaluate(event.key);

    }

}