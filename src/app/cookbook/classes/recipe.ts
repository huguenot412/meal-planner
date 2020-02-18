export class Recipe {
    id?: string;
    name?: string;
    source?: string;
    ingredients?: string[];
    instructions?: string[];
    rating?: number;
    notes?: string[];
    comments?: string[];
    prepTime?: number;
    cookTime?: number;
    tags?: string[];
    originalOwner?: string;
    likes?: number;

    constructor(name: string) {
        this.name = name;
    }
}