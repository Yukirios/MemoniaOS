import type { Rating } from "../types/rating";

export function Archive(ratings: Rating[]): string {

    if (ratings.length === 0) {

        return `
            <div class="archive">
                <div class="archive-empty">
                    No memories yet...
                </div>
            </div>
        `;

    }

    return `
        <div class="archive">

            <div class="archive-ribbon">

                ${ratings.map(rating => `
                    <span
                        class="archive-icon"
                        title="${rating.message}"
                    >
                        ${rating.icon}
                    </span>
                `).join("")}

            </div>

        </div>
    `;

}