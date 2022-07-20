import { useLocation } from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
  
  const { state } = useLocation();
  const { img, title, desc, price, brand, sum } = state;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>ÜRÜN DETAYI</h2>
      <div className={styles.detail}>
        <div>
          <img src={img} alt={title} className={styles.image} />
        </div>
        <div className={styles.detailsInfo}>
          <h3 className={styles.brand}>
            {brand} <span className={styles.sum}>{sum}</span>
          </h3>

          <p>
            <strong>
              <span className={styles.productDetail}>KATEGORİ: </span>{" "}
            </strong>
            {title}
          </p>

          <p>
            <strong>
              <span className={styles.productDetail}>AÇIKLAMALAR: </span>{" "}
            </strong>
            {desc}
          </p>

          <p className={styles.mainPrice}>
            <strong>
              <span className={styles.price}>ÜRÜN FİYATI: </span>{" "}
            </strong>
            {price} ₺
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
