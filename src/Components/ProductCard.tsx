import { Link } from "react-router";
import { Product } from "../Data";

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  return (
    <Link to={`product/${props.product.slug}/${props.product.id}`}>
      <img src={props.product.imageUrl} />
      <h3>{props.product.name}</h3>
      <span>Lampa</span>
    </Link>
  );
}
