import reactLogo from '../../img/First_project/reactjs-icon.svg';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img src={reactLogo} alt="react logo" />
                <h1 className="logo-title">ReactFacts</h1>
            </div>
            <div className="navbar-subtitle">
                <h3>React Course - Project 1</h3>
            </div>
        </div>
    );
}

export default Navbar;