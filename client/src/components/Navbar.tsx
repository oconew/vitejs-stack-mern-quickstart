// import {
//   ReactElement,
//   JSXElementConstructor,
//   ReactNode,
//   ReactPortal,
// } from "react";

// const user = {
//   firstName: "Eathan",
//   lastName: "O'Connor",
// };

function Navbar() {
  return (
    <>
      <nav id="navbar" className="bg-primary">
        <div className="cont relative" style={{ height: "69px" }}>
          <div className="left-section block absolute top-0">
            <ul className="top-1/5 absolute">
              <li>
                <a
                  href="/#menu"
                  className="transition-bold text-secondary"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/#booking"
                  className="transition-bold text-secondary"
                >
                  Bookings
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="transition-bold text-secondary"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="burger-menu top-1/3" id="burger-menu">
              <svg
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          </div>

          <div className="home-button transition-transform bg-primary">
            <a title="The Boat Inn" href="/">
              <img src="/logo-png.png"></img>
            </a>
          </div>

          <div className="chat-button transition-transform block absolute top-1/2 right-25 bg-primary">
            <a title="Enquiries" href="">
              <svg
                width="32"
                height="32"
                fill="#464646"
                className="bi bi-chat block mx-auto"
                viewBox="0 0 16 16"
                style={{ transform: "translateY(50%) translateX(-50%)" }}
              >
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
              </svg>
            </a>
          </div>
        </div>
        <nav
          id="burger-sub-menu"
          style={{ height: "0px", opacity: "0", top: "-500px" }}
        >
          <a className="navbar-level-two-items" href="/menu/food.html">
            Food
          </a>
          <a className="navbar-level-two-items" href="/menu/drinks.html">
            Drinks
          </a>
          <a className="navbar-level-two-items" href="/#booking">
            Bookings
          </a>
          <a className="navbar-level-two-items" href="/#contact">
            Contact
          </a>
        </nav>
      </nav>
    </>
    // <div>
    //   <h1>Navbar</h1>
    // </div>
  );
}

export default Navbar;
