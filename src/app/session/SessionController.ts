import { Window } from "../../components/Window";
import { EvaluationController } from "./EvaluationController";
import { KeyboardController } from "../input/KeyboardController";

export class SessionController {

    static start(app: HTMLDivElement): void {

        app.innerHTML = Window();

        EvaluationController.initialize(app);

        KeyboardController.initialize();

    }

}