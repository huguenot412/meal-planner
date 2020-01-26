export class Recipe {
    private id: number;
    name: string;
    source?: string;
    ingredients?: string[];
    instructions?: string[];
    rating?: number;
    notes?: string[];
    comments?: string[];
    prepTime?: number;
    cookTime?: number;
    totalTime?: number;
    tags?: string[];
    originalOwner?: string;
    likes?: number;

    constructor(name: string) {
        this.name = name;
        this.id = Date.now();
        this.totalTime = this.prepTime + this.cookTime;
    }

    get _id() {
        return this.id;
    }
}