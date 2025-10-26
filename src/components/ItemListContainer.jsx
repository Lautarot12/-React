import { useEffect, useState } from 'react'
import '../styles/itemlistcontainer.css'
import { getProducts } from '../mock/AsyncService'
import Itemlist from './ItemList'

const ItemListContainer = (props)=>{

    const [data, setData]= useState([])

    useEffect(()=>{
        getProducts()
        .then((res)=>setData(res))
        .catch((error)=>console.log(error))
    }, [])

    console.log(data, 'estado')

    return(
        <div>
            <h1 className="foto-hero">{props.children}</h1>
            {data.map((product, id)=> <p key={product.id}>{product.name}</p>)}
            <Itemlist data={data}/>
        </div>
    )
}

export default ItemListContainer