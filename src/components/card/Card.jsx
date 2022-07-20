import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const { title, img, id, price, brand, sum } = item;
  const navigate = useNavigate();
  return ( 
  <div className={styles.product} onClick={() => navigate(`/details/${id}`, { state : item })}>
    <div className={styles.imgContainer}>
   <img src={img} alt={title} className={styles.image} />
   </div>
   <div className={styles.propContainer}>
    <h3 className={styles.brand}>{brand}  <span className={styles.sum}>{sum}</span></h3>
      <h5>Kategori: <span className={styles.category}>{title}</span></h5>
      <h4 className={styles.box}>Sepet Fiyatı: <span className={styles.price} ><strong>{price} ₺</strong></span></h4>
    </div>
    </div>
)
}

export default Card;