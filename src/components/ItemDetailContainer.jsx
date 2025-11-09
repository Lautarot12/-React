import React, { use, useEffect, useState } from 'react';
import { getOneProduct } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(false)
    const param = useParams()


    useEffect(()=> {
        setCargando(true)
        getOneProduct(param.id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.error(error))
        .finally(()=> setCargando(false))

    }, [param.id])

    return (
        <>
        {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
        </>
    )
}

export default ItemDetailContainer;