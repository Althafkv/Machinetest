import React, { useEffect, useState } from 'react'
import "./Products.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

function Products() {

    const [products,setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    

    const fetchData  = async() => {
        const products  = await axios.get("https://fakestoreapi.com/products")
        console.log(products.data)
        setProducts(products.data)
    }

  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand fw-bold">Products</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className='text-decoration-none' to='/'><a className="nav-link">Home</a></Link></li>
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


                    {
                        products.map((item,index) => (
                            <div key={index} className="col mb-5">
                        <div className="card h-100 shadow">
                            <img height={250} style={{padding:"15px"}} className="card-img-top" src={item.image} alt="img" />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{item.title.slice(0,12)}...</h5>
                                    ${item.price}
                                </div>
                            </div>
                            <div className='text-center p-3'>
                            <Link to={`/view/${item.id}`} className='btn btn-info'><i class="fa-solid fa-eye"></i></Link> &nbsp;
                            <Link to={`/cart/${item.id}`} className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></Link>
                            </div>
                        </div>
                    </div>
                        ))
                    }

                </div>
            </div>
        </section>

    </>
  )
}

export default Products