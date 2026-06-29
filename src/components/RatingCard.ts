import type { Rating } from "../types/rating.ts"

export function RatingCard(rating: Rating): string {

    return `
    
       <div
            class="rating-card"
            style="
                border-color:${rating.color};
                box-shadow:0 0 20px ${rating.color}30;
            "
        >       

            <div
                class="rating-icon"
                style="color:${rating.color}"
            >

                ${rating.icon}

            </div>

            <div
                class="rating-title"
                style="color:${rating.color}"
            >

                ${rating.title}

            </div>

            <div
                class="rating-description"
            >

                ${rating.description}

            </div>

        </div>

    `

}