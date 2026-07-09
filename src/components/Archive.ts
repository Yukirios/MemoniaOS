import type { Rating } from "../types/rating";

export function Archive(ratings: Rating[]): string {

    if (ratings.length === 0) {

        return `
            <div class="archive">

                <div class="archive-title">
                    MEMORY ARCHIVE
                </div>

                <div class="archive-empty">
                    No memories yet...
                </div>

            </div>
        `;

    }

    return `
        <div class="archive">

            <div class="archive-title">
                MEMORY ARCHIVE
            </div>

            <div class="archive-list">

                ${ratings.map((rating) => `

                    <div class="archive-item">

                        <span class="archive-icon">
                            ${rating.icon}
                        </span>

                        <span class="archive-name">
                            ${rating.title}
                        </span>

                    </div>

                `).join("")}

            </div>

        </div>
    `;

}