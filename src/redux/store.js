import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth.reducer';
import { homeVideosReducer, relatedVideoReducer } from './reducers/videos.reducer';
import { selectedVideoReducer } from './reducers/videos.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  relatedVideos: relatedVideoReducer
})

const store = createStore(
  rootReducer, 
  {}, 
  composeWithDevTools(applyMiddleware(thunk)))

export default store