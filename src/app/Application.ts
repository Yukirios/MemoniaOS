import { BootController } from "./boot/BootController";
import { SessionController } from "./session/SessionController";

import { ThemeService } from "../services/ThemeService";
import { MaterializationService } from "../services/MaterializationService";

export class Application {

    static async start(): Promise<void> {

        const app = document.querySelector<HTMLDivElement>("#app");

        if (!app) {
            throw new Error("App root not found");
        }

        ThemeService.initialize();

        await BootController.start(app);

        SessionController.start(app);

        await MaterializationService.start();

    }

}