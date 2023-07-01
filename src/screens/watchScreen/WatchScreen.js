import React, { useEffect } from 'react'
import './_watchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedVideos, getVideosById } from '../../redux/actions/videos.action'

const WatchScreen = () => {

  const {id} = useParams()

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getVideosById(id))
    dispatch(getRelatedVideos(id))
  },[dispatch,id])

  const {video,loading} = useSelector(state=>state.selectedVideo)

  const {videos,loadings} = useSelector(state=>state.relatedVideos)

  return <Row>
    <Col lg={8}>
      <div className='watchScreen__player'>
        <iframe src={`https://www.youtube.com/embed/${id}`} title={video?.snippet?.title} allowFullScreen width='100%' height='100%'></iframe>
      </div>
      {
        !loading?<VideoMetaData video={video} videoId={id} />:<h6>Loading...</h6>
      }
    </Col>
    <Col lg={4}>
      {
        !loadings && videos?.filter(video=>video.snippet).map((video)=><VideoHorizontal video={video} key={video.id.videoId}/>)
      }
    </Col>
  </Row>
}

export default WatchScreen