import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  let enhancer = applyMiddleware(...middlewares);
  if (process.env.NODE_ENV === 'development') {
    enhancer = compose(
      console.tron.createEnhancer(),
      enhancer
    );
  }
  return createStore(reducers, enhancer);
};
