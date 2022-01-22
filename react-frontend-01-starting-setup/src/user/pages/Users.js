import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image: 'https://w.namu.la/s/4a386289e4beb6eb2941b22033eebfa6d487e57c8dbae93e74337a78942ead59c224683379fd4dabd772432019e68a13aae29fafca6a5e532201108f6afb31ab2d53ad1649ee6bd94ce0865692643cb2718190cf886ad65b1f66a96cba0260b2ec6255b020ee3e1eaa146a164a54f038',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
