import Info from './components/Digital_card/Info';
import About from './components/Digital_card/About';
import Interests from './components/Digital_card/Interests';
import Footer from './components/Digital_card/Footer';

const Digital = () => {
    return (
        <div className="digital-card">
            <Info />
            <div className="digital-card-mini-wrapper">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    );
}
 
export default Digital;