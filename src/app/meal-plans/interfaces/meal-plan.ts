import { Meal } from './meal';

export interface IMealPlan {
    id: string;
    name?: string;
    date: Date;
    meals: Meal[];
}