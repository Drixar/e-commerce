import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card>
      <div class="img">
        <Link to={`/product/${product.slug}`}>
          <img src={product.imageb} className='card-img-top' alt={product.name}/>
        </Link>
      </div>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title className='productTitle'> {product.name} </Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews= {product.numReviews}></Rating>
        <Card.Text> ${product.price} </Card.Text>
        <Card.Text> {product.countInStock} unidades</Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;