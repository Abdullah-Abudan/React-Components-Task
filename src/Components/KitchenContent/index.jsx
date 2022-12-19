import Container from '../../Components/Container';
import './style.css'
const KitchenContent = (props) =>{
    return (
            <Container>
                <div  className="kitchenContent" >
                    <div><img src={props.img} alt={props.title} srcset=""/></div>
                    <div>
                    <h1>{props.title}</h1>
                    <p>{props.descr}</p>                            
                    </div>
                    <hr className='line-border'></hr>
                    <span>{props.price}</span>
                </div>

            </Container>
    )
}
export default KitchenContent;
