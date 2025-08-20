import "./Image.css";
export default function Image({srcPath, altText}){
    return (<>
        <img src={srcPath} alt= {altText}/>
    </>)
}