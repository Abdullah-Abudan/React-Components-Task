import Container from '../../Components/Container';
import './style.css'
const MiddFlexContent = (props) =>{
    return (
            <Container>
                <div  className="about" >
                <div className='left'>
                    <h1>{props.title}</h1>
                    <h2>{props.main_descr}</h2>
                    <p>{props.sub_descr}</p>
                    <button className='button-2-content'>{props.btn}</button>
                </div>
                <div className='right'>
                    <img src={props.img} alt="food" />
                </div>                    
                </div>

            </Container>
    )
}
export default MiddFlexContent;