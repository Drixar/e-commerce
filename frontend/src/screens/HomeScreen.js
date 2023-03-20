import { Link } from "react-router-dom"
import data from "../data"

function HomeScreen() {
    return <div>
        <h1>Lista de Productos</h1>
          <div className="products">
            {data.products.map((product) => (
              <div
                className="product"
                key={product.slug}
              >
                <div class="img">
                  <Link to={`/product/${product.slug}`}>
                    <img
                      src={product.imageb}
                      alt={product.name}
                    />
                    {/* <img class="top" src= {product.imagef} alt={product.name}/> */}
                  </Link>
                </div>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p> {product.name} </p>
                  </Link>
                  <p> {product.price} </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
    </div>
}
export default HomeScreen