import React from "react";
import ratings from "../../assets/icon.svg";
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
          <img src="" alt="Crazy Image" />
        </div>
        <div className="deal-info">
          <div className="deal-title">
            <h2>Class Time Boy's Short Sleeve Pique Polo Shirt</h2>
          </div>
          <div className="ratings">
            <img src={ratings} alt="image" />
            <span>42 Reviews</span>
          </div>
          <div className="price">
            <span className="sp">Rs.599</span>
            <span>Rs.199</span>
            <p>Sale</p>
          </div>
          <div className="colors">
            <span>color:White</span>
            <div className="color-images">
              <img src={ratings} />
              <img src={ratings} />
              <img src={ratings} />
              <img src={ratings} />
            </div>
            <div className="size">
              <span>size: 4 Years</span>
              <div className="sizes">
                <button>4 Years</button>
                <button>5-6 Years</button>
                <button>7 Years</button>
                <button>8 Years</button>
                <button>10-12 Years</button>
                <button>14-16 Years</button>
              </div>
              <div className="quantiry">
                <h4>Quantity</h4>
                <button>- 1 +</button>
              </div>
              <div className="cart">
                <button>Add to Cart</button>
              </div>
              <div className="share-details">
                <h5>Share</h5>
                <h4>View full details</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
