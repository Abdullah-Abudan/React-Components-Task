import Container from '../../Components/Container';
import Nav from '../../Components/Nav';
import './style.css'
const Header = (props) =>{
    return (
        <header>
            <Container >
                <Nav myPage="Home" />
                <div className="headerContent">
                    <h1>Welcome To <br />Golden View Dine</h1>
                    <p>Explore the authentic vegan dishes with your friends and family</p>
                    <button className='button-2-content'>Read more</button>
                </div>
            </Container>
        </header>
    )
}
export default Header;