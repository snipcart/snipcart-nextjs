import {withRouter, RouterProps} from 'next/router'

export interface IProduct {
  id: string
  name: string
  price: number
  url: string  
  description: string
  image: string
}

interface IProductProps {
  product: IProduct
  router: RouterProps
}

const Product = (props: IProductProps) => {
  return (
    <div className="product">
      <h2 className="product__title">{props.product.name}</h2>
      <p className="product__description">{props.product.description}</p>
      <img src={props.product.image} alt="" className="product__image"/>
      <div className="product__price-button-container">
        <div className="product__price">${props.product.price.toFixed(2)}</div>
        <button 
          className="snipcart-add-item product__button"
          data-item-id={props.product.id}
          data-item-name={props.product.name}
          data-item-price={props.product.price}
          data-item-url={props.router.pathname}
          data-item-image={props.product.image}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default withRouter(Product)