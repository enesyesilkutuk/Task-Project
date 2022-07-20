import { useEffect, useState } from "react";
import data from "../../assets/data";
import Card from "../card/Card";
import styles from "./Products.module.css";

const Products = () => {

    const [clothes, setClothes] = useState([]);
  
    useEffect(() => {
      setClothes(data);
    }, []);
  
    return (
    <div className={styles.products}>
      {clothes.map((item) => {
      return (
       <Card item={item} key={item.id} />
      )
      })
    }
    </div>
  )
}

export default Products;

