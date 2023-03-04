import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Aspava',
    description: 'One of the most famous restaurant in Ankara',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipMrnDmt3S5rut1SmIsuoz_vHXzwVjiJIXjZlliI=w1080-h608-p-no-v0',
    address: 'Emek mah. Çankaya / Ankara',
    location: {
      lat: 39.916526,
      lng: 32.8170519,
    },
    creator: 'u1',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
