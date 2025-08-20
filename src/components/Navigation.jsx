import { Link } from 'react-router-dom';
export default function Navigation(){
    return (<>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/images">Image</Link>
              </li>
           </ul>
        </nav>
    </>);
}