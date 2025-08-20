import "./HomeCard.css";
export default function HomeCard({headingThree, description}){
    return (<>
        <div className="home-card">
            <h3> {headingThree} </h3>
            <p> {description }</p>
        </div>
    </>);
}