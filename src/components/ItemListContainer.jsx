import { useEffect, useState } from 'react'
import '../styles/itemlistcontainer.css'
import { getProducts } from '../mock/AsyncService'
import Itemlist from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props)=>{

    const [data, setData]= useState([])
    const {type} = useParams()
    console.log(type)

    useEffect(()=>{
        getProducts()
        .then((res)=> {
            if(type){
                setData(res.filter((producto)=> (producto.category === type)))
            }else {
                setData(res)
            }
        })
        .catch((error)=>console.log(error))
    }, [type])

    return(
        <div>
            <div className="foto-hero">{props.children}{type && <span className='text-capitalize'>{type}</span>}</div>
            <Itemlist data={data}/>
        </div>
    )
}

export default ItemListContainer