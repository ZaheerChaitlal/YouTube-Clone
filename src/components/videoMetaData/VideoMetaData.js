import React, { useEffect, useState } from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp } from 'react-icons/md'
import request from '../../api'

const VideoMetaData = ({video:{snippet,statistics}}) => {

  const {channelId,channelTitle,description,title,publishedAt} = snippet;
  const {viewCount,likeCount} = statistics;

  const [channelIcon,setchannelIcon] = useState(null)

  useEffect(()=>{
    const get_channel_icon =async ()=>{
      const {data:{items}} = await request('/channels',{
        params:{
          part:'snippet',
          id:channelId,
        }
      })
      setchannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon()
  },[channelId])

  return (
    <div className='videoMetaData py-2'>
      <div className='videoMetaData__top'>
        <h5>{title}</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(viewCount).format("0.a")} Views • 
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span className='mr-3'>
              <MdThumbUp size={26}/>{numeral(likeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className='videoMetaData__channel d-flex justify-content-between aligin-items-center my-2 py-3'>
        <div className='d-flex'>
          <img alt='' src={channelIcon?.url} className='rounded-circle mr-3'/>
        </div>
        <div className='d-flex flex-column'>
          <span>{channelTitle}</span>
        </div>
        <button className='btn border-0 p-2 m2'>Subscribe</button>
      </div>
      <div className='videoMetaData__description'>
        {description}
      </div>
    </div>
  )
}

export default VideoMetaData