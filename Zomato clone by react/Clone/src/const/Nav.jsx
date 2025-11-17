import React from "react";
import "./Nav.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className="navBar">
        {/* Nav 1  */}
        <div className="nav1">
          <div className="logo">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              width="128px"
              alt=""
            />
          </div>
          <div className="searchBar">
            <div className="place">
              <div id="loc">
                <FaLocationDot
                  style={{ color: "rgb(255, 126, 139)", fontSize: "1.3rem" }}
                />
              </div>

              <input
                id="location"
                type="text"
                placeholder="Ywca, Ashoka Rd, Hanum"
              />
              <div id="arrow">
                <IoMdArrowDropdown />
              </div>
            </div>
            <hr
              style={{
                height: "20px",
                border: "1px solid rgba(190, 188, 188, 1)",
              }}
            />
            <div className="bar">
              <div id="scope">
                <CiSearch />
              </div>
              <input
                id="search"
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </div>
          </div>

          <div className="btn">
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </div>

        {/* Nav 2 */}
        <div className="nav2">
          <Link className="link" to={"/"}>
             
            <div className="din flex">
              <div className="icons">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                  alt=""
                />
              </div>
              <h1>Dining</h1>
            </div>
          </Link>
          <Link className="link" to={"/delivery"}>
            <div className="del flex">
              <div className="icons">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                  alt=""
                />
              </div>
              <h1>Delivery</h1>
            </div>
          </Link>
          <Link className="link" to={"/nightlife"}>
           
            <div className="night flex">
              <div className="icons">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                  alt=""
                />
              </div>
              <h1>Nightlife</h1>
            </div>
          </Link>
           
        </div>
      </div>
    </>
  );
}
