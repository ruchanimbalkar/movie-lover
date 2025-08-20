import Image from "../components/Image.jsx";
import data from "../data.js";
import "../components/Images.css";
export default function Images(){

    return (<> 
         <h2>Movie Stills & Quotes</h2>
         <div className="images-card">
            {
                data.map((item,index)=>
                    <Image srcPath={item.srcPath} altText={item.altText} key={"image_" + index}/>
                )
            }            
         </div>
    </>);
}