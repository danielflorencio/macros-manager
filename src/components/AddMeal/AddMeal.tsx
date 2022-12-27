import Button from '../button/Button';
import { Meal } from '../../assets/types/meal';
import './styles.css'

export default function AddMeal({name, imgSrc, proteins, carbohydrates, fats, calories, measureAmount}: Meal){
    return(
        <div className='add-meal-section'>
            <div className="meal-img">
                <img src={imgSrc} style={{width: '100%', height: '100%', borderRadius: '16px'}} alt='meal image'></img>
            </div>
            <div className="meal-info">
                <div className='meal-info-header-container'>
                    <div className='meal-info-header'>
                        <h3 style={{textAlign: 'center'}}>{name}</h3>
                        <div className='nutritional-table'>
                            <div className='nutritional-table-row'>
                                <p><span>protein</span><strong><span className='right'>{proteins}g</span></strong></p>
                            </div>
                            <div className='nutritional-table-row'>
                                <p><span>carbohydrates</span><strong><span className='right'>{carbohydrates}g</span></strong></p>
                            </div>
                            <div className='nutritional-table-row'>
                                <p><span>fats</span><strong><span className='right'>{fats}g</span></strong></p>
                            </div>
                            <div className='nutritional-table-row'>
                                <p><span>calories</span><strong><span className='right'>{calories}kcal</span></strong></p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="meal-options">
                        <form>
                            <label>Amount: <input type='number'></input><strong> <i>g</i></strong></label>
                            <Button cta='Add Meal'/>
                        </form>
                    </div>    
                </div>
            </div>
        </div>
    )
} 