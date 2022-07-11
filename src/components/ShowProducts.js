import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get('${endpoint}/products')
        setProducts(response)
    }

    const deleteProduct = async (id) => {
        await axios.delete('${endpoint}/product/${id}')
        getAllProducts()
    }

    return (
        <div>
            <div className='d-grid gap-2'>

            </div>
        </div>
    )
}

export default ShowProducts