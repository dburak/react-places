import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h1>No places found. Maybe create one ?</h1>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {props.items.map((place) => (
        <PlaceItem
          key={place._id}
          id={place._id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
