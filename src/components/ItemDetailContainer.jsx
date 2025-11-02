import React, { use, useEffect, useState } from 'react';
import { getOneProduct } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const param = useParams()


    useEffect(()=> {
        getOneProduct(param.id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.error(error))

    }, [param.id])

    return (
        <>
        <ItemDetail detalle={detalle}/>
        </>
    )
}

export default ItemDetailContainer;