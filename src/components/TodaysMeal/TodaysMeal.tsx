import { dayMeals } from "../../assets/data/dayMeals"
export default function TodaysMeal(){
    return(
        <>
            {dayMeals[0].meals.map((meal, index) => {
                return(
                    <div key={index} className="day-meal">
                    <p>meal: {meal.name}</p>
                    <p>proteins: {meal.proteins}</p>
                    <p>carbohydrates: {meal.carbohydrates}</p>
                    <p>calories: {meal.calories}</p>
                    </div>
                )
            })}
        </>
    )
}