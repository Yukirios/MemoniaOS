import { BootController } from "./boot/BootController";

export function startApplication() {

    const app = document.querySelector<HTMLDivElement>("#app");

    if (!app) {

        throw new Error("App root not found");

    }

    BootController.start(app);

}