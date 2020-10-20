import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

function AppShopping() {

  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
}

export default AppShopping;
