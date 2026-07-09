import { RatingCard } from "../../components/RatingCard";

import { RatingService } from "../../services/RatingService";

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

        this.showLoading();

        setTimeout(() => {

            this.showRating(rating);

        }, 1000);

    }

    private static showLoading() {

        this.container.innerHTML = "Чем это так пахнет?...";

    }

    private static showRating(rating: ReturnType<typeof RatingService.getByKey>) {

        if (!rating) return;

        this.container.innerHTML = RatingCard(rating);

    }

}