import { RatingCard } from "../../components/RatingCard";
import { RatingService } from "../../services/RatingService";
import { loadingMessages } from "../../data/loadingMessages";

export class EvaluationController {

    private static container: HTMLDivElement;

    static initialize(app: HTMLDivElement) {

        const container =
            app.querySelector<HTMLDivElement>("#rating-container");

        if (!container) {
            throw new Error("Rating container not found");
        }

        this.container = container;

    }

    static evaluate(key: string) {

        const rating = RatingService.getByKey(key);

        if (!rating) return;

        const animation = this.showLoading();

        setTimeout(() => {

            clearInterval(animation);

            this.showRating(rating);

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
    ) {

        if (!rating) return;

        this.container.innerHTML =
            `<div class="rating-enter">
                ${RatingCard(rating)}
            </div>`;

    }

}