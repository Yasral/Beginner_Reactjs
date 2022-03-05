import twitterIcon from '../../img/Second_project/Twitter_icon.svg';
import facebookIcon from '../../img/Second_project/Facebook_icon.svg';
import instagramIcon from '../../img/Second_project/Instagram_icon.svg';
import githubIcon from '../../img/Second_project/GitHub_icon.svg';
const Footer = () => {
    return (
        <div className="footer-section">
            <ul>
                <li><img src={twitterIcon} alt="twitter icon" /></li>
                <li><img src={facebookIcon} alt="facebook icon" /></li>
                <li><img src={instagramIcon} alt="instagram icon" /></li>
                <li><img src={githubIcon} alt="github icon" /></li>
            </ul>
        </div>
    );
}
 
export default Footer;