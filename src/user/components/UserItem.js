import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

const UserItem = (props) => {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/${props.id}/places`}>
          <div className='user-item__image'>
            <Avatar
              image={`${process.env.REACT_APP_BACKEND_URL}/${props.image}`}
              alt={props.name}
            />
          </div>
          <div className='user-item__info'>
            <h1>{props.name}</h1>
            <h2>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
