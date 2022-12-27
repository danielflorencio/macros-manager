import { dayMeal } from "../types/dayMeal";
import { meals } from "./meals";
export const dayMeals: dayMeal[] = [
    // { date: getFormattedDateFunction(), meals: []}
    { date: new Date, meals: [meals[0], meals[1], meals[2]]},
    { date: new Date, meals: [meals[0], meals[1], meals[2]]},
    { date: new Date, meals: [meals[0], meals[1], meals[2]]}
]