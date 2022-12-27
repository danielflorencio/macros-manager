import './styles.css'
type Props = {
    cta: string;
}
export default function Button({cta}: Props){
    return(
        <button className="button-1">{cta}</button>
    )
}