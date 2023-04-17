import { Link} from 'react-router-dom';
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="ErrorPage_container">
      <div className="wrapper">
        <div className="Error_content">
            <h2>OOPS! Something error occured</h2>
            <Link to="/">Go to Home Page</Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage