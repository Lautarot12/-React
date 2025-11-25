import { useEffect, useState } from 'react'
import '../styles/itemlistcontainer.css'
import { getProducts } from '../mock/AsyncService'
import Itemlist from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDocs, where, query } from 'firebase/firestore'
import {db} from '../service/firebase'

const ItemListContainer = (props)=>{

    const [data, setData]= useState([])
    const [loader, setLoader]= useState(false)
    const {type}= useParams()
    


    useEffect(()=>{
        setLoader(true)

        const productCollection = type ? query(collection(db, 'productos'), where('category', '==', type )) :collection(db, 'productos')

        getDocs(productCollection)
        .then((res)=>{

            const list = res.docs.map((doc)=> {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoader(false))
    },[type])
    

    return(
        <>
        {
            loader
            ? <LoaderComponent/>
            : <div>
            <div className="foto-hero">{props.children}</div>
            <Itemlist data={data}/>
        </div>
        }
        </>
    )
}

export default ItemListContainer