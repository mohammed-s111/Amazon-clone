import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "./Slider/Slider";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Slider />

        <div className="home__row">
          <Product
            id="12321341"
            title="The 7 Habits of Highly Effective Teens Paperback – Illustrated"
            price={13.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71oOAa+N3GL._AC_SR360,240_QL70_.jpg"
          />
          <Product
            id="49538094"
            title="Alen FLEX Air Purifier, Quiet Air Flow for Large Rooms, 700 SqFt, Air Cleaner for Allergens, Dust, Mold, Pet Odors with Long Filter Life"
            price={279.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/813ks9Fu1WS._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Apple 2022 12.9-inch iPad Pro (Wi-Fi + Cellular, 128GB) - Space Gray (6th Generation)"
            price={598.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81hAx31maUL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title='Rove R2- 4K Dash Cam Built in WiFi GPS Car Dashboard Camera Recorder with UHD 2160P, 2.4" LCD, 150° Wide Angle, WDR, Night Vision'
            price={119.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81Qi6a1mzuL._AC_UL675_SR675,480_.jpg"
          />
          <Product
            id="90829332"
            title="Garmin Dash Cam Mini 2, Tiny Size, 1080p and 140-degree FOV, Monitor Your Vehicle While Away w/ New Connected Features, Voice Control"
            price={129.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/71IgOp+tVFS._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
