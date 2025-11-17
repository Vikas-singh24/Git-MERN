import React, { useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "./Delivery.css";
export default function Delivery() {
  const boxRef = useRef();
   const boxRefB = useRef();
  // const prev = document.querySelectorAll(".prev")
  const scrollLeft = () => {
    boxRef.current.scrollLeft -= 270;
  };
  const scrollRight = () => {
    boxRef.current.scrollLeft += 270;
  };
  const scrollLeftB = () => {
    boxRefB.current.scrollLeft -= 270;
  };
  const scrollRightB = () => {
    boxRefB.current.scrollLeft += 270;
  };

  const foods = [
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      title: "Briyani",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      title: "Briyani",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      title: "Briyani",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      title: "Briyani",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      title: "Briyani",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      title: "Briyani",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      title: "Briyani",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      title: "Briyani",
    },
  ];

  const shop = [
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
      title: "Haldiram's",
      distance: "26 min",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
      title: "Haldiram's",
      distance: "26 min",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
      title: "Haldiram's",
      distance: "26 min",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
      title: "Haldiram's",
      distance: "26 min",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
      title: "Haldiram's",
      distance: "26 min",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
      title: "Haldiram's",
      distance: "26 min",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
      title: "Haldiram's",
      distance: "26 min",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
      title: "Haldiram's",
      distance: "26 min",
    },
  ];
  const hotel = [
    {
      paid: "Promoted",
      img: "https://b.zmtcdn.com/data/pictures/4/21155984/4651a5ff820707d603219fca6188330f_o2_featured_v2.jpg",
      off: "Flat 20% OFF",
      title: "Coffee, Beverages, Sandwi",
      rating: "4.2",
      type: "Brims Modern Coffee",
      price: "₹400 for one",
      distance: "44 min",
    },
    {
      paid: "Promoted",
      img: "https://b.zmtcdn.com/data/pictures/4/21155984/4651a5ff820707d603219fca6188330f_o2_featured_v2.jpg",
      off: "Flat 20% OFF",
      title: "Coffee, Beverages, Sandwi",
      rating: "4.2",
      type: "Brims Modern Coffee",
      price: "₹400 for one",
      distance: "44 min",
    },
    {
      paid: "Promoted",
      img: "https://b.zmtcdn.com/data/pictures/4/21155984/4651a5ff820707d603219fca6188330f_o2_featured_v2.jpg",
      off: "Flat 20% OFF",
      title: "Coffee, Beverages, Sandwi",
      rating: "4.2",
      type: "Brims Modern Coffee",
      price: "₹400 for one",
      distance: "44 min",
    },
    {
      paid: "Promoted",
      img: "https://b.zmtcdn.com/data/pictures/4/21155984/4651a5ff820707d603219fca6188330f_o2_featured_v2.jpg",
      off: "Flat 20% OFF",
      title: "Coffee, Beverages, Sandwi",
      rating: "4.2",
      type: "Brims Modern Coffee",
      price: "₹400 for one",
      distance: "44 min",
    },
    {
      paid: "Promoted",
      img: "https://b.zmtcdn.com/data/pictures/4/21155984/4651a5ff820707d603219fca6188330f_o2_featured_v2.jpg",
      off: "Flat 20% OFF",
      title: "Coffee, Beverages, Sandwi",
      rating: "4.2",
      type: "Brims Modern Coffee",
      price: "₹400 for one",
      distance: "44 min",
    },
    {
      paid: "Promoted",
      img: "https://b.zmtcdn.com/data/pictures/4/21155984/4651a5ff820707d603219fca6188330f_o2_featured_v2.jpg",
      off: "Flat 20% OFF",
      title: "Coffee, Beverages, Sandwi",
      rating: "4.2",
      type: "Brims Modern Coffee",
      price: "₹400 for one",
      distance: "44 min",
    },
  ];
  return (
    <>
      <div className="delivery">
        <div className="box1">
          <div className="options">
            <button className="filter  option">Filters</button>
            <button className="offers option">Pure Veg</button>
            <button className="rating option">
              Cuisines{" "}
              <span>
                <MdKeyboardArrowDown />
              </span>
            </button>
          </div>
        </div>

        <div className="box2">
          <dv className="menu">
            <h1>Inspiration for your first order</h1>
            <div className="menuBox">
              <button className="btn prev" onClick={scrollLeft}>
                <FaAngleLeft />
              </button>
              <button className="btn next" onClick={scrollRight}>
                <FaAngleRight />
              </button>

              <div className="foods" ref={boxRef}>
                {foods.map((item) => (
                  <div className="food1">
                    
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                  </div>
                  
                ))}
              </div>
            </div>
          </dv>
        </div>

        <div className="box3">
          <div className="shops">
            <h1>Top brands for you</h1>
            <div className="shopBox">
              <button className="btn prev" onClick={scrollLeftB}>
                <FaAngleLeft />
              </button>
              <button className="btn next" onClick={scrollRightB}>
                <FaAngleRight />
              </button>
            <div className="shopList" ref={boxRef}>
              {shop.map((item) => (
                <div className="shopName">
                  <div className="shopImg">
                    <img id="img" src={item.img} alt="" />
                  </div>
                  <p>{item.title}</p>
                  <span>{item.distance}</span>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>

        <div className="box4">
          <h1>Food Delivery Restaurants in Delhi NCR</h1>

          <div className="delBox" ref={boxRef}>
            {hotel.map((item) => (
              <div className="delBoxes">
                <div className="delPic">
                  <p>{item.paid}</p>
                  <img id="pic" src={item.img} alt={item.title} />
                  <h1> {item.off}</h1>
                </div>
                <div className="delText">
                  <div className="below">
                    {" "}
                    <h3>{item.type}</h3>{" "}
                    <button>
                      {item.rating} <MdOutlineStar className="star" />
                    </button>{" "}
                  </div>
                  <div className="below">
                    {" "}
                    <h4>{item.title}</h4> <h4>{item.price}</h4>
                  </div>
                  <div className="below">
                    {" "}
                    <p>{item.distance}</p>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
