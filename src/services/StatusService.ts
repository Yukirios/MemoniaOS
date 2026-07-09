import { statusMessages } from "../data/statusMessages";

export class StatusService {

    private static element: HTMLSpanElement | null = null;

    static initialize(): void {

        this.element = document.querySelector<HTMLSpanElement>("#status-text");

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

    private static random(messages: string[]): string {

        return messages[
            Math.floor(Math.random() * messages.length)
        ];

    }

    static ready(): void {

        this.set(
            this.random(statusMessages.ready)
        );

    }

    static scanning(): void {

        this.set(
            this.random(statusMessages.scanning)
        );

    }

    static verdict(): void {

        this.set(
            this.random(statusMessages.verdict)
        );

    }

}