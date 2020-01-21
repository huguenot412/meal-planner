export class Meal {
    name: string;
    recipe?: string;
    notes?: string;
    tags?: string[];
    id: number;

    constructor(name: string) {
        this.name = name;
        this.id = Date.now();
    }
}