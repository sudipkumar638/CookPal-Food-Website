import React from 'react'
import "./filterbutton.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const FilterButton = ({bcolor,btext,foodfun}) => {
  return (
    <div className='filterbuttonsection' style={{backgroundColor:bcolor}} onClick={foodfun} >
        <div className='ftext'>
          {btext}
        </div>
        <div className='farrow'>
           
            <ArrowForwardIosIcon sx={{fontSize:"1rem",marginTop:"0.5rem"}}></ArrowForwardIosIcon>
        </div>
      
    </div>
  )
}

export default FilterButton