import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Faq.css'
export default function Faq() {
  return (
   <>
   <div className="faqBox">
    <div className="box1">
        <h1>Explore options near me</h1>
        <div className="faqs"><h2>Popular cuisines near me</h2><span><IoIosArrowDown /></span></div>
        <div className="faqs"><h2>Popular restaurant types near me</h2><span><IoIosArrowDown /></span></div>
        <div className="faqs"><h2>Top restaurant chains</h2><span><IoIosArrowDown /></span></div>
        <div className="faqs"><h2>Cities we deliver to</h2><span><IoIosArrowDown /></span></div>
        <div className="faqs"><h2>Popular Dishes Near Me</h2><span><IoIosArrowDown /></span></div>
        <div className="faqs"><h2>Discover More Fun</h2><span><IoIosArrowDown /></span></div>
    </div>

   </div>
   </>
  )
}
