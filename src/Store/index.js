import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../Reducers/index';

const store = createStore(reducer);

const ReduxContainer = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxContainer;
