import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import allSagas from './sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        allReducers,
        compose(
            applyMiddleware(sagaMiddleware),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : compose
        )
    );
    sagaMiddleware.run(allSagas);
    return store;
}

export default configureStore;
