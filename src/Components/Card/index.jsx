import './style.css'
const Card = (props) =>{
    return (
            <div className="card">
                <img src={props.img} alt={props.title} />
                <h4>{props.title}</h4>
                <p>{props.descr}</p>                           
            </div>

    )
}
export default Card;