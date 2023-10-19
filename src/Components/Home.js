import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { ApiCall } from './ApiCall'

const Home = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    // dispatch(ApiCall())
  }, [])
  return (
    <div className='displays'>
      <img src="https://cdn.holidaykeepers.com/wp-content/uploads/2022/05/holidaykeepers-logo.png" alt = "Holiday Keepers" className='h-[140px] text-[white] mt-[20%]'/>
      <h1 className='text-[white] font-[800] text-[40px]'>Welcome holiday Keepers</h1>
      </div>
  )
}

export default Home