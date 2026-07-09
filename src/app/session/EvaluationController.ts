import { RatingCard } from "../../components/RatingCard";
import { RatingService } from "../../services/RatingService";
import { StatusService } from "../../services/StatusService";
import { loadingMessages } from "../../data/loadingMessages";

export class EvaluationController {

    private static container: HTMLDivElement;

    private static isEvaluating = false;

    static initialize(app: HTMLDivElement): void {

        const container =
            app.querySelector<HTMLDivElement>("#rating-container");

        if (!container) {
            throw new Error("Rating container not found");
        }

        this.container = container;

        StatusService.initialize();
        StatusService.ready();

    }

    static evaluate(key: string): void {

        if (this.isEvaluating) {
            return;
        }

        const rating = RatingService.getByKey(key);

        if (!rating) {
            return;
        }

        this.isEvaluating = true;

        StatusService.scanning();

        const animation = this.showLoading();

        setTimeout(() => {

            clearInterval(animation);

            this.showRating(rating);

            StatusService.verdict();

            setTimeout(() => {

                StatusService.ready();

            }, 1000);

            this.isEvaluating = false;

        }, 1500);

    }

    private static showLoading(): number {

        const message =
            loadingMessages[
                Math.floor(Math.random() * loadingMessages.length)
            ];

        let dots = 0;

        this.container.innerHTML = message;

        return window.setInterval(() => {

            dots = (dots + 1) % 4;

            this.container.innerHTML =
                message + ".".repeat(dots);

        }, 250);

    }

    private static showRating(
        rating: ReturnType<typeof RatingService.getByKey>
    ): void {

        if (!rating) {
            return;
        }

        this.container.innerHTML =
            `<div class="rating-enter">
                ${RatingCard(rating)}
            </div>`;

    }

}