import "./header.css";
function Header() {
    
    return (
        <header id="header">
            <div className={"container"}>
            <div className={"inner"}>
            <div className={"logo"}>
            </div>
         <nav className="Navigation">
        <ul>
            <li className={"active"}>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">Portfolio</a>
            </li>
            <li>
                <a href="/">About me</a>
            </li>
            <li>
                <a href="/">Testimonials</a>
            </li>

        </ul>
        <button id="button">Contact Me</button>
        </nav> 
        </div>
        </div>
        </header> 
    );
    
}
export default Header;