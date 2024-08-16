function Hero(props: { id?: string }) {
  if (props.id == "menus") {
    return (
      <>
        <section className="menus relative" id="menu">
          <div className="hero bg-primary relative items-center">
            <h3>Our Menus</h3>
            <p>
              Really good food and the best drinks in a homely pub in the heart
              of England.
            </p>

            <div className="button food">
              <a
                style={{ textDecoration: "none" }}
                href="/menu/food.html"
                className="absolute left-6"
              >
                <div className="food-button transition-transform block absolute bg-primary left-6 bg-primary">
                  <img src="/icons8-restaurant-50.png" />
                </div>
                <p className="transition-bold absolute left-6">Food Menu</p>
              </a>
            </div>

            <div className="button drink">
              <a style={{ textDecoration: "none" }} href="menu/drinks">
                <div className="drinks-button transition-transform block absolute right-6 bg-primary">
                  <img src="/icons8-drink-50.png" />
                </div>
                <p className="transition-boldabsolute right-6">
                  Drinks <br /> Menu
                </p>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  } else
    return (
      <>
        <section className="book relative" id="booking">
          <div className="hero bg-primary relative items-center">
            <h3>Book a table</h3>
            <p>
              Book your table in advance so we can be ready for you when you
              arrive.
            </p>
            <div className="bg-primary">
              <div className="button booking">
                <a
                  style={{ textDecoration: "none" }}
                  href="http://tableagent.com/warwickshire/the-boat-inn-mpxhhvij"
                  className="absolute left-6"
                >
                  <div className="food-button transition-transform block absolute bg-primary left-6">
                    <img src="/icons8-restaurant-table-50.png" />
                  </div>
                  <p className="transition-bold absolute left-6">
                    Make a Booking
                  </p>
                </a>
              </div>
            </div>
            <div className="button view">
              <a
                style={{ textDecoration: "none" }}
                href="http://tableagent.com/warwickshire/the-boat-inn-mpxhhvij"
              >
                <div className="drinks-button transition-transform block absolute right-6 bg-primary">
                  <a title="View Bookings" href="">
                    <img src="/icons8-book-50.png" />
                  </a>
                </div>
                <p className="transition-bold absolute right-6">
                  View <br /> Bookings
                </p>
              </a>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero;
