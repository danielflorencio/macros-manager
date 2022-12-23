import './App.css'
import AddMeal from './components/button/Block/AddMeal/AddMeal'
import Block from './components/button/Block/Block/Block'
// import img from '../public/imgs/black-beans.webp'

function App() {
  
  return (
    <div className='app-container'>
      <AddMeal img='../../../public/imgs/black-beans.webp' mealTitle='Black Beans' mealDescription=''/>
    </div>
    
  )
}

export default App
