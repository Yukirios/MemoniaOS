export class MaterializationService {

    private static overlay: HTMLDivElement | null = null;

    private static pixels: HTMLDivElement[] = [];

    private static readonly COLS = 48;

    private static readonly ROWS = 27;

    private static readonly STEP = 28;

    static async start(): Promise<void> {

        this.createOverlay();

        await this.reveal();

        this.destroy();

    }

    private static createOverlay(): void {

        this.overlay = document.createElement("div");

        this.overlay.className = "materialization";

        this.overlay.style.gridTemplateColumns =
            `repeat(${this.COLS}, 1fr)`;

        this.overlay.style.gridTemplateRows =
            `repeat(${this.ROWS}, 1fr)`;

        this.pixels = [];

        const total = this.COLS * this.ROWS;

        for (let i = 0; i < total; i++) {

            const pixel = document.createElement("div");

            pixel.className = "materialization-pixel";

            // Небольшая неоднородность цифрового шума
            pixel.style.opacity =
                (0.90 + Math.random() * 0.10).toString();

            this.pixels.push(pixel);

            this.overlay.appendChild(pixel);

        }

        document.body.appendChild(this.overlay);

    }

    private static async reveal(): Promise<void> {

        const pixels = [...this.pixels]
            .map(pixel => ({
                pixel,
                order: Math.random()
            }))
            .sort((a, b) => a.order - b.order)
            .map(item => item.pixel);

        for (let i = 0; i < pixels.length;) {

            const remaining = pixels.length - i;

            // В начале быстрее, в конце медленнее.
            // Это убирает ощущение "всё исчезло за один кадр".
            const step =
                remaining > 300 ? this.STEP :
                remaining > 150 ? 8 :
                remaining > 60  ? 4 :
                2;

            const batch = pixels.slice(i, i + step);

            batch.forEach(pixel => {

                pixel.style.opacity = "0";

            });

            i += step;

            await new Promise<void>(resolve => {

                requestAnimationFrame(() => resolve());

            });

        }

    }

    private static destroy(): void {

        this.overlay?.remove();

        this.overlay = null;

        this.pixels = [];

    }

}