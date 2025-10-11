import '../styles/itemlistcontainer.css'

const ItemListContainer = (props)=>{
    return(
        <div>
            <h1 className="foto-hero">{props.children}</h1>
        </div>
    )
}

export default ItemListContainer