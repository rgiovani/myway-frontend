import { createStore, compose, applyMiddleware } from 'redux'

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development' && console.tron
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
