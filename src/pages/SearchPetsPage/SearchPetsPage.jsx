import { Link, useLocation } from 'react-router-dom';

const SearchPetsPage = ({ notices }) => {
  const location = useLocation();

  return (
    <div >
      <ul >
        {notices?.map(({ id, title }) => (
          <li key={id} >
            <Link to={`/notices/${id}`} state={{ from: location }}>
              <h4 >{title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPetsPage;
