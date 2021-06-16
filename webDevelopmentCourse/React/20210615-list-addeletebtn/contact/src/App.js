import React from 'react';
import  UserContextProvider  from './context/Context';

import User from './User';

function App() {
  return (
      <UserContextProvider>
        <User />
      </UserContextProvider>
  );
}

export default App;
