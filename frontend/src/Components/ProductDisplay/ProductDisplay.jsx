import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_image from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = ({ product }) => {

  const { addToCart } = useContext(ShopContext)

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-md-2 col-lg-1 left-side-img-main ">

          <div className="row ">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

        </div>
        <div className="col-md-5 ">
          <img src={product.image} alt='productImage' className='img-fluid product-rightside-img ' />
        </div>
        <div className="col-md-5 col-lg-6 ">
          <h1 className='productName'>{product.name}</h1>
          <div className=' d-flex align-items-center'>
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_dull_icon} alt='starDullImage' height="50%" className='img-fluid me-1' />
            <p className='pt-3 '>(122)</p>
          </div>

          <div className='mt-2'>
            <h5><span className='text-danger'>Lecturer : </span> {product.lecturer} </h5>
          </div>

          <div className='mt-4'>
            <h4> <pre className='productDetails'><span className='text-danger '>Details : </span> {product.details} </pre></h4>
          </div>

          <div className='mt-4'>
            <h5><span className='text-danger'>Time Period : </span> {product.timePeriod} </h5>
          </div>

          <div className='mt-4'>
            <h5><span className='text-danger'>Category : </span> {product.category} Minds </h5>
            <h5 className='mt-4'><span className='text-danger '>Tags : </span> Modern, Latest</h5>
          </div>

          <div className='mt-4 d-flex '>
            <h5 className='me-5 '><span className='text-danger '>Price : </span> ${product.new_price}</h5>
            <h5 className='text-decoration-line-through text-danger'>${product.old_price}</h5>
          </div>


          <div className='mt-3'>
            <button className='btn btn-danger mt-3 ps-5 pe-5 pt-2 pb-2 fs-5' onClick={() => { addToCart(product.id) }} >Add to Cart</button>
          </div>

        </div>
      </div>5





    </div>
  )
}

export default ProductDisplay