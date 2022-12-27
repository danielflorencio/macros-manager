import Button from '../button/Button'
import './styles.css'
export default function Block(){
    return (
    <div className="block">
        <h3>block-title</h3>
        <p>block description</p>
        <Button cta='nah'/>
    
    </div>)
}