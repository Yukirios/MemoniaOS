export class StatusService {

    private static element: HTMLSpanElement | null = null;

    static initialize(): void {

        this.element =
            document.querySelector<HTMLSpanElement>("#status-text");

        if (!this.element) {
            throw new Error("Status text element not found");
        }

    }

    private static set(message: string): void {

        if (!this.element) {
            return;
        }

        this.element.textContent = message;

    }

    static ready(): void {

        this.set("READY");

    }

    static scanning(): void {

        this.set("SCANNING MEMORY...");

    }

    static verdict(): void {

        this.set("VERDICT GENERATED");

    }

}