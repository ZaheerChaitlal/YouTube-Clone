import { HOME_VIDEO_FAIL, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionType"

export const homeVideosReducer = (
  state={
    videos:[],
    loading:false,
    nextPageToken:null,
    activeCategory:"All",
  }, 
  action)=>{

    const {type,payload} = action

    switch(type){
      case HOME_VIDEO_SUCCESS:return {
        ...state,
        videos:payload.videos,
        loading:false,
        nextPageToken:payload.nextPageToken,
        activeCategory:payload.category,
      }
      case HOME_VIDEO_FAIL:return {
        ...state,
        loading:false,
        error:payload
      }
      case HOME_VIDEO_REQUEST:return {
        ...state,
        loading:true,
      }
      default:return state
    }
}

export const selectedVideoReducer = (
  state={
  loading: true,
  video: null
},
  action
)=>{
  const{payload,type} =action

  switch(type){
    case SELECTED_VIDEO_REQUEST:
      return{
        ...state,
        loading: true
      }
    
    case SELECTED_VIDEO_SUCCESS:
      return{
        ...state,
        video:payload,
        loading:false
      }
    
    case SELECTED_VIDEO_FAIL:
      return{
        ...state,
        video:null,
        loading:false,
        error:payload
      }

    default:
      return state
  }
}

export const relatedVideoReducer = (
  state={
  loading: true,
  videos: [],
},
  action
)=>{
  const{payload,type} =action

  switch(type){
    case RELATED_VIDEO_REQUEST:
      return{
        ...state,
        loading: true,
      }
    
    case RELATED_VIDEO_SUCCESS:
      return{
        ...state,
        videos:payload,
        loading:false,
      }
    
    case RELATED_VIDEO_FAIL:
      return{
        ...state,
        loading:false,
        error:payload,
      }

    default:
      return state
  }
}