import { useState } from "react";
import { useRouter } from "next/router";
import { Heart } from "heroicons-react";
import { ProductSt } from "./Product.Style";
import Image from "next/image";

const Product = (props) => {
  const router = useRouter();
  const { id, name, price, img, scrollToRef, top } = props;
  const [selected, setSelected] = useState(false);
  return (
    <>
      <ProductSt>
        <div className="wishCont">
          <div
            className="wish"
            onClick={() => {
              setSelected(!selected);
            }}
          >
            <Heart color={selected ? "green" : "white"} />
          </div>
        </div>
        <div className="imageCont">
          <Image
            src={img}
            alt="product"
            width="100%"
            height="100%"
            placeholder="blur"
          />
        </div>
        <div className="productBase">
          <div className="left">
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <div
            className="addtoCart"
            onClick={() => {              
              router.push('/products/'+id)              
              scrollToRef(top);
            }}
          >
            <p>Add to cart</p>
          </div>
        </div>
      </ProductSt>
    </>
  );
};

export default Product;
