import React from "react";
import ratings from "../../assets/icon.svg";
import dealimg from "../../assets/image.jpg";
import cimg1 from "../../assets/image1.jpg";
import cimg2 from "../../assets/image2.jpg";
import cimg3 from "../../assets/image3.jpg";
import "./crazy.css";
export const Crazy = () => {
  return (
    <div>
      <div className="crazy-heading">
        <h2> Crazy Deal</h2>
        <p>
          Grab our Crazy Deal now! Super low prices on special items just for
          you. It’s our big thank you and a way to make room for new stuff. Only
          one item per person, so everyone gets a chance at these amazing
          prices. Hurry, once they’re gone, they’re gone! Get your deal before
          it disappears. It’s crazy because we love giving you the best!
        </p>
      </div>
      <div className="details">
        <div className="crazy-img">
          <img src={dealimg} alt="Crazy Image" />
        </div>
        <div className="deal-info">
          <div className="deal-title">
            <h2>
              Class Time Boy's Short Sleeve Pique <br />
              Polo Shirt
            </h2>
          </div>
          <div className="ratings">
            <img src={ratings} alt="image" />
            <span className="rc">42 reviews</span>
          </div>
          <div className="price">
            <span className="s">Rs 599.00</span>
            <span className="s1">Rs 199.00</span>
            <p>Sale</p>
          </div>
          <div className="colors">
            <span>color:White</span>
            <div className="color-images">
              <img src={cimg1} />
              <img src={cimg2} />
              <img src={cimg3} />
              <img src={dealimg} />
            </div>
            <div className="size">
              <span>size: 4 Years</span>
              <div className="sizes">
                <button type="button"> 4 Years</button>
                <button type="button">5-6 Years</button>
                <button type="button">7 Years</button>
                <button type="button">8 Years</button>
                <button type="button">10-12 Years</button>
                <button type="button">14-16 Years</button>
              </div>
            </div>
            <div className="quantity">
              <h4>Quantity</h4>
              <div className="sp">
                <span> - </span>
                <span> 1 </span>
                <span> + </span>
              </div>
            </div>
            <div className="cart">
              <button type="button">Add to Cart</button>
            </div>
            <div className="share-details">
              <span>Share</span>
              <span>View full details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
