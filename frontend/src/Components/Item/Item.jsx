import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-5 col-sm-6 col-9 mt-3 ">
      <div className='overflow-hidden'>
        <Link to={`/product/${item.id}`}>   <img src={item.image} onClick={window.scrollTo(0, 0)} className='img-fluid d-flex justify-content-center popular-image' /></Link>
      </div>
      <h4 className='p-2 text-break'>{item.name}</h4>
      <div className="row ps-2">
        <div className="col-3">
          <h6>  ${item.new_price} </h6>
        </div>
        <div className="col-3">
          <h6 className='text-decoration-line-through'> ${item.old_price} </h6>
        </div>
      </div>
    </div>
  )
}

export default Item