import React, { useRef, useEffect } from "react";
import { Prd, Categories } from "../MockAPI/MockData";
import Product from "../Product/Product";
import { ChevronDown } from "heroicons-react";
import { ProductCont } from "./ShopPage.Style";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const ShopPage = () => {
  const top = useRef(null);
  useEffect(() => {
    scrollToRef(top);
  }, []);
  return (
    <>
      <ProductCont ref={top}>
        <div className="headSection">
          <div className="fadeSection">
            <div className="navBar"></div>
            <div className="Section">
              <div className="navBar"></div>
              <div className="heroSection">
                <h1>WELCOME TO AFRICA!</h1>
                <p>
                  We have a variety of African made items that are sdabhj
                  udshbjsjk bdjsfhbsbu fsbdi sdhsifhidsj
                </p>
                <div className="button">
                  <p>Shop with us</p>
                  <div className="oval">
                    <div className="circle" />
                  </div>
                </div>
              </div>
            </div>
            <div className="baseCont">
              <div className="base">
                <div className="baseleft">
                  {Categories.map((category, i) => {
                    return (
                      <div className="properties" key={i}>
                        <p>{category.type}</p>
                        <ChevronDown />
                      </div>
                    );
                  })}
                </div>
                <div className="baseText">Sort by: best selling</div>
              </div>
            </div>
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
export default ShopPage;
