import type { Rating } from "../types/rating.ts"

export function RatingCard(rating: Rating): string {

    return `
    
        <div class="rating-card">

            <div class="rating-icon">

                ${rating.icon}

            </div>

            <div class="rating-title">

                ${rating.title}

            </div>

            <div class="rating-description">

                ${rating.description}

            </div>

        </div>

    `

}