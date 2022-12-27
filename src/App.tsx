import './App.css'
import AddMeal from './components/AddMeal/AddMeal'
import Block from './components/Block/Block'
import Navbar from './components/Navbar/Navbar'
import NewMealListing from './components/NewMealListing/NewMealListing'
import { meals } from './assets/data/meals'
import TodaysMeal from './components/TodaysMeal/TodaysMeal'

function App() {
  
  return (
    <div className='app-container'>
      {/* <AddMeal imgSrc='../../../public/imgs/black-beans.webp' name='Black Beans'/> */}
      {/* <AddMeal name='beans' imgSrc='../../../public/imgs/black-beans.webp' proteins={9} carbohydrates={8} fats={12} calories={150} measureAmount={200}/> */}
      {/* <Navbar/> */}
      
      {/* <NewMealListing/> */}
      <TodaysMeal/>      
      {/* <h1>teste</h1> */}
    </div>
    
  )
}

export default App
