import React, { use, useEffect, useState } from 'react';
import { getOneProduct } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';
import { Link, useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(false)
    const [invalid, setInvalid] = useState(null)

    const param = useParams()



    //Firebase
    useEffect(()=>{
        setCargando (true)

        const docRef = doc(db, 'productos', param.id)

        getDoc(docRef)
        .then((res)=>{
            if(res.data()) {
                setDetalle({id:res.id, ...res.data()})
            }else {
                setInvalid(true)
            }
        })
        .catch((error)=> console.error(error))
        .finally(()=> setCargando(false))
    }, [param.id])

    // useEffect(()=> {
    //     setCargando(true)
    //     getOneProduct(param.id)
    //     .then((res)=> setDetalle(res))
    //     .catch((error)=> console.error(error))
    //     .finally(()=> setCargando(false))

    // }, [param.id])
    if(invalid){
        return <div>
            <h1>El producto no existe</h1>
            <Link className='btn btn-dark' to='/'>Volver al home</Link>
        </div>
    }
    return (
        <>
        {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
        </>
    )
}

export default ItemDetailContainer;