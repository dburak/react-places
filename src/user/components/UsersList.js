import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className='center'>
        <h1>No users found.</h1>
      </Card>
    );
  }

  return (
    <ul className='users-list'>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user._id}
            id={user._id}
            image={user.image}
            name={user.name}
            placeCount={user.places.length}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
