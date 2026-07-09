import type { Rating } from "../types/rating";

export class ArchiveService {

    private static readonly MAX_ITEMS = 10;

    private static archive: Rating[] = [];

    static add(rating: Rating): void {

        this.archive.unshift(rating);

        if (this.archive.length > this.MAX_ITEMS) {

            this.archive.pop();

        }

    }

    static getAll(): Rating[] {

        return [...this.archive];

    }

    static clear(): void {

        this.archive = [];

    }

}