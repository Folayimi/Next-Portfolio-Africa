import React, { useRef, useEffect, useState } from "react";
import { Prd, ProductData } from "../MockAPI/MockData";
import Product from "../Product/Product";
import CartPage from "../CartPage/CartPage";
import Modal from "../Modal/Modal";
import { ProductCont } from "./ProductPage.Style";
import { useRouter } from "next/router";
import { Star, ChevronLeft } from "heroicons-react";
import Image from "next/image";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const ProductPage = ({ Id }) => {
  const router = useRouter();
  const selectedProduct = ProductData.find(
    (items) => items.id === parseInt(Id)
  );  
  const [color, setColor] = useState(selectedProduct?.colorType[0].color);  
  const [size, setSize] = useState(0);
  const [total, setTotal] = useState(0);
  const [addCart, setAddCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState(true);
  const [error, setError] = useState(false);
  const [moreR, setMoreR] = useState(false);
  const [message, setMessage] = useState("Please Select a Size");

  useEffect(() => {
    scrollToRef(top);
    if (!localStorage.cartItems || !localStorage.total) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("total", total);
    } else {
      setCartItems(JSON.parse(localStorage.cartItems));
      setTotal(JSON.parse(localStorage.total));
    }
  }, []);

  const top = useRef(null);
  return (
    <>
      <ProductCont ref={top}>
        {addCart && (
          <CartPage
            setAddCart={setAddCart}
            cartItems={cartItems}
            setCartItems={setCartItems}
            total={total}
            setTotal={setTotal}
            top={top}
            scrollToRef={scrollToRef}
            setSize={setSize}
          />
        )}
        {error && <Modal message={message} setError={setError} />}
        <div className="productViewCont">
          <div className="Phead" onClick={() => router.back()}>
            <ChevronLeft size="20px" />
            <h4>Product</h4>
          </div>
          <div className="productView">
            <div className="leftSection">
              {selectedProduct?.colorType.map((item, i) => {
                {
                  if (item.color == color) {
                    return (
                      <>
                        <DisplayProduct
                          key={i}
                          selectedProduct={selectedProduct}
                          color={color}
                        />
                      </>
                    );
                  }
                }
              })}
            </div>
            <div className="rightSection">
              {
                <ProductDetail
                  selectedProduct={selectedProduct}
                  setColor={setColor}
                  setSize={setSize}
                  setAddCart={setAddCart}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  color={color}
                  size={size}
                  setTotal={setTotal}
                  total={total}
                  setError={setError}
                  newItem={newItem}
                  setNewItem={setNewItem}
                />
              }
            </div>
          </div>
          <div className="reviewCont">
            <p className="head">Reviews</p>
            <div className="reviews">
              {selectedProduct?.reviews.map((items, i) => {
                if (moreR === false && i < 3) {
                  return (
                    <>
                      <div className="review" key={i}>
                        <p className="message">{items.message}</p>
                        <div className="right">
                          <p>{items.name}</p>
                          <p>{items.country}</p>
                          <div className="stars">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                } else if (moreR == true && i >= 0) {
                  return (
                    <>
                      <div className="review" key={i}>
                        <p className="message">{items.message}</p>
                        <div className="right">
                          <p>{items.name}</p>
                          <p>{items.country}</p>
                          <div className="stars">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
              {selectedProduct?.reviews.length > 3 && moreR === false ? (
                <div
                  className="moreR"
                  onClick={() => {
                    setMoreR(true);
                  }}
                >
                  <p>Load More Reviews</p>
                </div>
              ) : (
                <div
                  className="moreR"
                  onClick={() => {
                    setMoreR(false);
                  }}
                >
                  <p>Load Less Reviews</p>
                </div>
              )}
            </div>
          </div>
          <div className="bodyHead">
            <p>Other Products</p>
          </div>
        </div>
        <div className="bodyCont">
          <div className="body">
            {Prd.map((items) => {
              return (
                <Product
                  {...items}
                  key={items.id}
                  scrollToRef={scrollToRef}
                  top={top}
                />
              );
            })}
          </div>
        </div>
      </ProductCont>
    </>
  );
};

const DisplayProduct = ({ color, selectedProduct }) => {
  return (
    <>
      {selectedProduct.colorType.map((item) => {
        return (
          <>
            {item.color === color &&
              item.images.map((images) => {
                return (
                  <>
                    <div className="prd" key={images.id}>
                      <Image src={images.img} alt="product" />
                    </div>
                  </>
                );
              })}
          </>
        );
      })}
    </>
  );
};

const ProductDetail = ({
  selectedProduct,
  setColor,
  color,
  setSize,
  size,
  setAddCart,
  setCartItems,
  cartItems,
  setTotal,
  total,
  setError,
  newItem,
  setNewItem,
}) => {
  const [content, setContent] = useState("description");
  return (
    <>
      <div className="section">
        <h3>{selectedProduct?.name}</h3>
        <h2>N {selectedProduct?.price}</h2>
      </div>
      <div className="section">
        <p>{selectedProduct?.description}</p>
      </div>
      <div className="section">
        <p className="bold">Colors</p>
        <div className="colorCnt">
          {selectedProduct?.colorType.map((items, i) => {
            return (
              <>
                <div
                  key={i}
                  className={items.color === color ? "colorType2" : "colorType"}
                  onClick={() => {
                    setColor(items.color);
                  }}
                >
                  <Image src={items.images[0].img} alt="itemImage" />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="section">
        <div className="sizeHead">
          <p>Sizes</p>
          <p>View Styleguide</p>
        </div>
        <div className="sizes">
          <div className="sizesCont">
            {selectedProduct?.sizes.map((items, i) => {
              return (
                <>
                  <div
                    key={i}
                    className={items.size === size ? "size2" : "size"}
                    onClick={() => {
                      setSize(items.size);
                    }}
                  >
                    {items.size}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section">
        <div
          className="addToCart"
          onClick={() => {
            for (var i = 0; i < selectedProduct?.colorType.length; i++) {
              if (selectedProduct?.colorType[i].color === color && size !== 0) {
                const newCart = cartItems.find(
                  (item) =>
                    item.color === color &&
                    item.price === selectedProduct?.price &&
                    item.name === selectedProduct?.name &&
                    item.size === size
                );

                if (newCart) {
                  newCart.number += 1;
                } else {
                  setCartItems([
                    ...cartItems,
                    {
                      id: new Date().getTime(),
                      color: color,
                      number: 1,
                      img: selectedProduct?.colorType[i].images[0].img,
                      price: selectedProduct?.price,
                      name: selectedProduct?.name,
                      size: size,
                    },
                  ]);
                }
              }
              if (size !== 0) {
                setTotal(total + parseInt(selectedProduct?.price));
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                localStorage.setItem("total", total);
                setError(false);
                setAddCart(true);
              } else {
                setAddCart(false);
                setError(true);
              }
            }
          }}
        >
          Add To Cart
        </div>
      </div>
      <div className="section">
        <div className="desc">
          <p
            onClick={() => {
              setContent("description");
            }}
          >
            Product Description
          </p>
          <p
            onClick={() => {
              setContent("materials");
            }}
          >
            Materials
          </p>
        </div>
        <hr width="100%" />
      </div>
      <div className="section">
        {content === "description" && <p>{selectedProduct?.Pdescription}</p>}
        {content === "materials" && <p>{selectedProduct?.material}</p>}
      </div>
    </>
  );
};

export default ProductPage;
