import Scrollbars from 'react-custom-scrollbars';
import moment from 'moment';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'styles/globals.scss';
import { store } from 'app/store';
import { Navbar } from 'components';

function MyApp({ Component, pageProps }) {
  moment.locale('en');
  return (
    <Provider store={store}>
      <Scrollbars style={{ height: '100vh' }} universal={true} autoHide>
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer />
      </Scrollbars>
    </Provider>
  );
}

export default MyApp;
