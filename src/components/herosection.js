import "./hero_section.css";
// import Group from '../Images/Group.png';
function Herosection() {
    return (
    <div className={"Hero_section"}>
        <div className={"container"}>
            <div className={"Hero_raw"}>
            {/* left */}
            <div className={"Content_Left"}>
            <h1>I create product design and brand experience</h1>
            <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse varius enim in eros elementum tristique.
            </p>
            <button id="button">Get in Touch</button>
        </div>
             {/* right */}
        <div className={"Content_right"}>
         <img src={Group} />   
    </div>
        </div>
        </div>
    </div>
);
}
export default Herosection;