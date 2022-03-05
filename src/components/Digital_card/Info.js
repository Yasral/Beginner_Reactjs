import digitalProfile from '../../img/Second_project/Profile_photo.svg';
import mailIcon from '../../img/Second_project/Mail_icon.svg';
import linkedIcon from '../../img/Second_project/linkedin.svg';
const Info = () => {
    return (
        <div className="info-section">
            <div className="profile">
                <img src={digitalProfile} alt="This is my profile" />
            </div>
            <div className="informations">
                <h3>Laura Smith</h3>
                <h5>Frontend Developer</h5>
                <h6>laurasmith.website</h6>
            </div>
            <div className="custom-buttons">
                <button className="white">
                    <img src={mailIcon} alt="mail icon" />
                    <span>Email</span>
                </button>
                <button className="blue">
                    <img src={linkedIcon} alt="mail icon" />
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    );
}
 
export default Info;