import React from 'react'
import Item from './Item'

const Itemlist = ({data})=> {
    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            {data.map((product)=> <Item key={product.id} product={product}/>)}
        </div>
    )
}

export default Itemlist