import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const {addProduct, removeProduct} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
        <hr />
        <div className='container'>
            <h1>👟</h1>
            <h3>Adidas Running Shoes</h3>
            <h4><small>Rs. 1500</small></h4>
            {/* <button className="btn btn-primary my-2 mr-2" onClick={()=> {dispatch(actionCreators.addProduct(1500))}}>+ Add to Cart</button>
            <button className="btn btn-primary my-2 mx-2" onClick={()=> {dispatch(actionCreators.removeProduct(1500))}}>- Remove from Cart</button> */}
            <button className="btn btn-primary my-2 mr-2" onClick={()=> {addProduct(1500)}}>+ Add to Cart</button>
            <button className="btn btn-primary my-2 mx-2" onClick={()=> {removeProduct(1500)}}>- Remove from Cart</button>
        </div>
        <hr />
        <div className='container'>
            <h1>👞</h1>
            <h3>Woodland Genuine Leather Shoes</h3>
            <h4><small>Rs. 1750</small></h4>
            <button className="btn btn-primary my-2 mr-2" onClick={()=> {addProduct(1750)}}>+ Add to Cart</button>
            <button className="btn btn-primary my-2 mx-2" onClick={()=> {removeProduct(1750)}}>- Remove from Cart</button>
        </div>
        <hr />
    </>
  )
}

export default Shop