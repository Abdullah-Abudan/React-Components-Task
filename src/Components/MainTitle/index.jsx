import Container from '../../Components/Container';
import './style.css'
const MainTitle = (props) =>{
    return (
            <Container>
                <div  className="about-MainTitle" >
                    <h1>{props.title}</h1>
                    <p>{props.descr}</p>                    
                </div>

            </Container>
    )
}
export default MainTitle;
