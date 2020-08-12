import React from 'react';

const UserContext = React.createContext({
  signedIn: false,
  name: '',
  email: '',
});

export default UserContext;
