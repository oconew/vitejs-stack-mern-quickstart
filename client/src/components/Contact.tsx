function Contact() {
  return (
    <>
      <section className="contact relative" id="contact">
        <div
          style={{
            textDecoration: "none",
            overflow: "hidden",
            maxWidth: "95vw",
            width: "800px",
            height: "500px",
            margin: "auto",
            marginTop: "15px",
          }}
        >
          <div
            id="canvas-for-googlemap"
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
          >
            <iframe
              style={{ height: "100%", width: "100%", border: 0 }}
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?q=CV23+8HQ&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
          <a
            className="google-map-code-enabler"
            rel="nofollow"
            href="https://kbj9qpmy.com/bp"
            id="grab-maps-authorization"
          ></a>{" "}
        </div>

        <div className="address">
          <div>
            <h3>Come and see us</h3>
          </div>

          <p style={{ paddingTop: "20px" }}>
            The Boat Inn,
            <br />
            Rugby Road,
            <br />
            Birdingbury,
            <br />
            POST CODE
          </p>

          <div className="contact-button transition-transform">
            <img src="/resources/icons8-message-50.png" />
            <p style={{ paddingTop: "15px" }}>CONTACT US</p>
          </div>

          <div className="contact-button transition-transform">
            <img src="/resources/icons8-message-50(1).png" />
            <p>FEEDBACK</p>
          </div>

          <div className="contact-button transition-transform">
            <img src="/resources/icons8-tablecloth-50.png" />
            <p>BOOK A TABLE</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
