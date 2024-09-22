type ProductProps = {
    id:string
    title:string
    price:number
    image: string
}


function Product({ title , price , image}:ProductProps){
   return (
    <div className="product">
         <img src={image}/>
         <div>
            <h3>{title}</h3>
            <p className="product-price">{price}</p>
         </div>
         <p className="product-actions">
            <button>افزودن به سبد خرید</button>
         </p>
    </div>
   )
}

export default Product;