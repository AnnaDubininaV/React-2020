import { Link } from 'react-router-dom';

import './directory-item.style.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  return (
    <Link to={route} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
