import Container from '../../Components/Container';
import './style.css'
const JoinKitchen = (props) =>{
    return (
            <Container>
                <div  className="joinKitchen" >
                    <div><img src={props.img} alt={props.title} /></div>
                    <div style={{textAlign:'center'}}>
                    <h1>{props.title}</h1>
                    <p>{props.descr}</p>   
                    <button className='button-2-content'>{props.btn}</button>                         
                    </div>
                    <div><img src={props.img} alt={props.title} /></div>
                </div>

            </Container>
    )
}
export default JoinKitchen;
