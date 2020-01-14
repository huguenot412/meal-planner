import { Meal } from './meal';

export interface MealPlan {
    id: number;
    name: string;
    date: Date;
    meals: Meal[];
}