import Button from '../Button/Button';
import './styles.css'

type Props = {
    img: string,
    mealTitle: string,
    mealDescription: string;
}

export default function AddMeal({img, mealTitle, mealDescription}: Props){
    return(
        <div className='add-meal-section'>
            <div className="meal-img">
                <img src={img} style={{width: '100%', height: '100%', borderRadius: '16px'}} alt='meal image'></img>
            </div>
            <div className="meal-info">
                <div className='meal-info-header-container'>
                    <div className='meal-info-header'>
                        <h3 style={{textAlign: 'center'}}>{mealTitle}</h3>
                        <div className='nutritional-table'>
                            <div className='nutritional-table-row'>
                                <p><span>protein</span><strong><span className='right'>4g</span></strong></p>
                            </div>
                            <div className='nutritional-table-row'>
                                <p><span>carbohydrates</span><strong><span className='right'>9g</span></strong></p>
                            </div>
                            <div className='nutritional-table-row'>
                                <p><span>fats</span><strong><span className='right'>4g</span></strong></p>
                            </div>
                            <div className='nutritional-table-row'>
                                <p><span>calories</span><strong><span className='right'>147kcal</span></strong></p>
                            </div>
                        </div>
                        
                        <p>{mealDescription}</p>
                    </div>
                    <br/>
                    <br/>
                    <div className="meal-options">
                        <form>
                            <label>Amount: <input type='number' inputMode='numeric'></input></label> {/* Input mode: numeric eliminates the arrows from the number input */}
                            <Button cta='Add Meal'/>
                        </form>
                    </div>    
                </div>
            </div>
        </div>
    )
}