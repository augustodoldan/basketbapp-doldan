import './ItemListContainer.css'

const ItemListContainer=(props)=>{
    const {greeting, subtitle} = props
    return(
        <div>
        <h1 className="title-page">{greeting}</h1>
        <h3 className="subtitle-page">{subtitle}</h3>
        </div>
    )
}

export default ItemListContainer