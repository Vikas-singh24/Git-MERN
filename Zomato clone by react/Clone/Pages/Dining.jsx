import React, { useState, useRef } from "react";

import { FaCaretRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "./Dining.css";
export default function Dining() {
  const boxRef = useRef();
  // const prev = document.querySelectorAll(".prev");
  const scrollLeft = () => {
    boxRef.current.scrollLeft -= 278;
  };
  const scrollRight = () => {
    boxRef.current.scrollLeft += 278;
  };

  const cards = [
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    },
    {
      id: 1,
      title: "Insta-worthy spots",
      places: "34 Places",
      img: "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp",
    }
  ];

    const hotel = [
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"},
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"},
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"},
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"},
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"},
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"},
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"},
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"},
      {paid:"Promoted", img:"https://b.zmtcdn.com/data/pictures/3/20863533/3ad7a12bd1f6fbf993708a3a8498369f_featured_v2.jpg", disImg:"https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png",off:"Flat 20% OFF",title:"Cé La Vie Kitchen & Bar",rating:"4.2",type:"North Indian, Mediterranea", price:"₹2,000 for two",place:"Connaught Place, New Delhi",distance:"1.4 km"}
    ]

  return (
    <>
      <div className="dining">
        {/* box 1 */}
        <div className="box1">
          <div className="collections">
            <h1>Collections</h1>
            <p>
              <h4>
                {" "}
                Explore curated lists of top restaurants, cafes, pubs, and bars
                in Delhi NCR, based on trends{" "}
              </h4>{" "}
              <span>
                All collections in Delhi NCR{" "}
                <FaCaretRight className="rightArrow" />
              </span>
            </p>
            <div className="places">
              <button className="btn prev" onClick={scrollLeft}>
                <FaAngleLeft />
              </button>
              <button className="btn next" onClick={scrollRight}>
                <FaAngleRight />
              </button>

              <div className="place" ref={boxRef}>
                {cards.map((item) => (
                  <div className="card" id="shadows">
                    <img
                      className="placeImags"
                      src={item.img}
                      alt={item.title}
                    />
                    <div className="text">
                      <h2>{item.title}</h2>
                      <p>
                        {item.places} <FaCaretRight className="rightArrow" />
                      </p>
                    </div>
                    <div className="dark"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* box 1 End here */}
        <div className="box2">
          {/* Options 'filter' */}
          <div className="options">
            <button className="filter  option">Filters</button>
            <button className="offers option">Offers</button>
            <button className="rating option">Rating:4.5+</button>
            <button className="pet  option">Pet friendly</button>
            <button className="outdoors option">Outdoor seating</button>
            <button className="alcohol option">serves Alcohol</button>
            <button className="open option"> Open Now</button>
          </div>

          <div className="offer">
            <img
              id="off"
              src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png"
              alt=""
            />

            <h1>Restaurants in Delhi NCR</h1>

            <div className="restaurants" ref={boxRef}>
              {hotel.map((item)=>(
                <div className="restaurant1 restaurantBox">
                <div className="restPic">
                  <p>{item.paid}</p>
                  <img
                    id="pic"
                    src={item.img}
                    alt={item.title}
                  />
                  <h1>
                   
                    <img
                      id="dic"
                      src={item.disImg}
                      alt={item.off}
                    />
                    {item.off}
                  </h1>
                </div>
                <div className="restText">
                  <div className="below">
                    
                    <h3>{item.title}</h3>
                    <button>
                      {item.rating} <MdOutlineStar className="star" />
                    </button>
                  </div>
                  <div className="below">
                    {" "}
                    <h4>{item.type}</h4> <h4>{item.price} </h4>
                  </div>
                  <div className="below">
                    {" "}
                    <h5>{item.place}</h5> <p>{item.distance}</p>
                  </div>
                </div>
              </div>
              ))}
              
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
