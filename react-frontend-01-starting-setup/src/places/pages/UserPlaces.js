import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One Of Best Building',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One Of Best Building',
    imageUrl:
      'https://w.namu.la/s/f30457f70474c24a9b9705f581f1a2e00bcd3e3f377357ed88c216bbe3ead7346c9dcc6e19a2e05b625a44f8882fe3784f5c20e690b6147d58eb26f1ce9d334cfc44c9f2de117026259f0fa042b2cb7f95dd3deeab9a1ba948dc05716ea44ffd',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
