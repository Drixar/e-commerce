import data from './data';

function App() {
  return (
    <div>
      <header className="App-header">
        <a href="/">e-commerce</a>
      </header>
      <main>
        <h1>Lista de Productos</h1>
        <div className="products">
          {data.products.map((product) => (
            <div
              className="product"
              key={product.slug}
            >
              <div class="img">
                <a href={`/product/${product.slug}`}>
                  <img
                    src={product.imageb}
                    alt={product.name}
                  />
                  {/* <img class="top" src= {product.imagef} alt={product.name}/> */}
                </a>
              </div>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p> {product.name} </p>
                </a>
                <p> {product.price} </p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
