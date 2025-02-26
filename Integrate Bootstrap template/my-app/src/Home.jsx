function Home() {
    return (
      <div>
        {/* Hero Section */}
        <section className="text-center p-5 bg-light">
          <h1 className="display-4 fw-bold">Welcome to MyWebsite</h1>
          <p className="lead text-muted">We provide top-notch solutions to help your business grow.</p>
          <button className="btn btn-primary btn-lg rounded-pill shadow-lg">Get Started</button>
        </section>
  
        {/* About Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h3>Our Mission</h3>
                <p>We aim to deliver high-quality services with innovative technology.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h3>Our Vision</h3>
                <p>Empowering businesses with cutting-edge solutions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h3>Why Choose Us?</h3>
                <p>Expertise, dedication, and a passion for success.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="bg-primary text-white text-center p-5">
          <h2>Our Services</h2>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-4">
                <i className="bi bi-laptop display-4"></i>
                <h3>Web Development</h3>
                <p>We build responsive and dynamic websites.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-graph-up display-4"></i>
                <h3>Marketing</h3>
                <p>Grow your business with data-driven marketing strategies.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-people display-4"></i>
                <h3>Consulting</h3>
                <p>Expert advice for business success.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="container my-5">
          <h2 className="text-center">Contact Us</h2>
          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </section>
      </div>
    );
  }
  
  export default Home;
  