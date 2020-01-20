import { Meal } from '../interfaces/meal';
import * as moment from 'moment';

export class MealPlan {
    id: string;
    date: moment.Moment;
    meals: Meal[];
    name?: string;

    constructor(date: moment.Moment, meals?: Meal[]) {
        this.date = date;
        this.id = this.date.format('LL');
        this.meals = meals;
    }
}