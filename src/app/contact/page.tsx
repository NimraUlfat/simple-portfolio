export default function Contact() {
    return (
      <div className="contact-page">
        <h1>Contact Me</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={4}
            ></textarea>
          </div>
  
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    );
  }