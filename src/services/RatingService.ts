import { ratings } from "../data/ratings";
import type { Rating } from "../types/rating";

export class RatingService {

    static getByKey(key: string): Rating | undefined {

        return ratings.find(r => r.key === key);

    }

}