import { useEffect, useState } from 'react'
import '../styles/itemlistcontainer.css'
import { getProducts } from '../mock/AsyncService'
import Itemlist from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemListContainer = (props)=>{

    const [data, setData]= useState([])
    const [loader, setLoader]= useState(false)
    const {type} = useParams()
    
    useEffect(()=>{
        setLoader(true)
        getProducts()
        .then((res)=> {
            if(type){
                setData(res.filter((producto)=> (producto.category === type)))
            }else {
                setData(res)
            }
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoader(false))
    }, [type])

    return(
        <>
        {
            loader
            ? <LoaderComponent/>
            : <div>
            <div className="foto-hero">{props.children}{type && <span className='text-capitalize' style={{fontSize: '2rem', fontWeight:'bold'}}>{type}</span>}</div>
            <Itemlist data={data}/>
        </div>
        }
        </>
    )
}

export default ItemListContainer