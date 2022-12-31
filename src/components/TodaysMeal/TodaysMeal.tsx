import { dayMeals } from "../../assets/data/dayMeals"
import '../AddMeal/styles.css'
export default function TodaysMeal(){
    return(
        <>
            {dayMeals[0].meals.map((meal, index) => {
                return(
                    <div key={index} className='add-meal-section'>
                    <div className="meal-img">
                        <img src={'../../../public/imgs/' + meal.imgSrc} style={{width: '100%', height: '100%', borderRadius: '16px'}} alt='meal image'></img>
                    </div>
                    <div className="meal-info">
                        <div className='meal-info-header-container'>
                            <div className='meal-info-header'>
                                <h3 style={{textAlign: 'center'}}>{meal.name}</h3>
                                <div className='nutritional-table'>
                                    <div className='nutritional-table-row'>
                                        <p><span>protein</span><strong><span className='right'>{meal.proteins}g</span></strong></p>
                                    </div>
                                    <div className='nutritional-table-row'>
                                        <p><span>carbohydrates</span><strong><span className='right'>{meal.carbohydrates}g</span></strong></p>
                                    </div>
                                    <div className='nutritional-table-row'>
                                        <p><span>fats</span><strong><span className='right'>{meal.fats}g</span></strong></p>
                                    </div>
                                    <div className='nutritional-table-row'>
                                        <p><span>calories</span><strong><span className='right'>{meal.calories}kcal</span></strong></p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>


                    // <div key={index} className="day-meal">w
                    // <p>meal: {meal.name}</p>
                    // <p>proteins: {meal.proteins}</p>
                    // <p>carbohydrates: {meal.carbohydrates}</p>
                    // <p>calories: {meal.calories}</p>
                    // </div>
                )
            })}
        </>
    )
}