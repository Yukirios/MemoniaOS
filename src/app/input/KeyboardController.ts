import { EvaluationController } from "../session/EvaluationController";
import { ThemeService } from "../../services/ThemeService";

export class KeyboardController {

    static initialize(): void {

        window.addEventListener("keydown", (event) => {

            // Developer shortcut
            if (event.key === "F8") {

                event.preventDefault();

                ThemeService.next();

                return;

            }

            EvaluationController.evaluate(event.key);

        });

    }

}