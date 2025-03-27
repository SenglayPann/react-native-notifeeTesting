import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootRoutes from './src/Navigation/RootRoutes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootRoutes />
    </NavigationContainer>
  );
}

export default App;
