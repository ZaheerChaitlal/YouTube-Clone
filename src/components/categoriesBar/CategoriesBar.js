import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./_categoriesBar.scss"
import { getVideosByCategory } from '../../redux/actions/videos.action'

const keywords = [
  "All",
  "React JS",
  "Angular",
  "React Native",
  "Music",
  "News",
  "Gaming",
  "Sport",
  "Reviews",
  "Podcasts",
  "Live",
  "Mixes",
  "Sci-fi films",
  "Soundtracks",
  "Characters",
  "Pop music",
  "Recently uploaded",
  "Watched",
  "New to you"
]

const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState("All")

  const dispatch = useDispatch()

  const handleClick = (value)=>{
    setActiveElement(value)
    dispatch(getVideosByCategory(value))
  }

  return (
    <div className='categoriesBar'>
      {
        keywords.map((value, i)=><span onClick={()=>handleClick(value)} className={activeElement === value?'active':''} key={i}>{value}</span>)
      }
    </div>
  )
}

export default CategoriesBar