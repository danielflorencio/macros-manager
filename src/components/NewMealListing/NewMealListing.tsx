import AddMeal from "../AddMeal/AddMeal"
import { meals } from "../../assets/data/meals"

export default function NewMealListing(){
    return(
    <>
        {/* <h1>teste</h1> */}
        {meals.map((meal, index) => {
            return(
            <div key={index}><AddMeal name={meal.name} imgSrc={meal.imgSrc} proteins={meal.proteins} carbohydrates={meal.carbohydrates} fats={meal.fats} calories={meal.calories} measureAmount={meal.measureAmount}/></div>
            )
        })}
    </>)
}