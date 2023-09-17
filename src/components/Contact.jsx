import React from "react";

function Contact() {
  return (
    <>
      <div className="contact">
        <main>
          <h1>Contact Me</h1>
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="abc" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                id="email"
                required
              />
            </div>{" "}
            <div>
              <label htmlFor="message">Message</label>
              <input
                type="text"
                placeholder="Tell us about your query..."
                id="message"
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Contact;
