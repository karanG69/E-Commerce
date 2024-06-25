import React from 'react'
import './Sidebar.css'
import  {Link} from 'react-router-dom'
import list_product_icon from '../../assets/Product_list_icon.svg'
import add_product_iocn from '../../assets/add_product_cart.png'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: "none",color:"inherit"}}>
            <div className="sidebar-item">
                <img src={add_product_iocn} style={{width:"50px"}} alt=""/>
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: "none",color:"inherit"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} style={{width:"50px"}} alt=""/>
                <p>List Products</p>
            </div>
        </Link>
    </div>
  )
}
