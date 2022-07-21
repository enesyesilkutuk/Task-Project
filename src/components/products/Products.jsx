import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>
          Ana Sayfa
        </title>
      </Helmet>
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

