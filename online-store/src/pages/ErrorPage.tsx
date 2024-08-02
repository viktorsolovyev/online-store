import { Link } from 'react-router-dom';
import '../styles/pages/errorPage.css';

const ErrorPage = () => {
  return (
    <div className="container error__container">
      <h2 className='error__heading'>No results found</h2>
      <p className='error__description'>We couldn't find what you searched for. Try searching again.</p>
      <Link to="/" className='btn error__btn'>Home</Link>
    </div>
  )
}

export default ErrorPage