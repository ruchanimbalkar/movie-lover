import HomeCard from "../components/HomeCard.jsx";
export default function Home(){
    let aboutPara= "My favorite movies are reviewed/discussed here. I love to watch movies.";
    let youTubeLink = (<a href="https://www.youtube.com/@MovieLover911" target="_blank">
                      Find me on YouTube  </a>);
    return (<> 
         <h2>Welcome to Movie Lover's official website !</h2>
         <HomeCard
            headingThree="About"
            description= {aboutPara}
         />
         
         <HomeCard
            headingThree= "YouTube "
            description={youTubeLink}
        />
    

    </>);
}