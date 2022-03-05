import bgLogo from '../../img/First_project/reactjs-bg-icon.svg';
const Main = () => {
    return (
        <div className="main-content">
            <div className="first_section">
                <h2 className="main-content-title">Fun facts about React</h2>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            <div className="second-section">
                <img src={bgLogo} alt="a logo" />
            </div>
        </div>
    );
}
 
export default Main;