import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_zyhfxmm",
        "template_3jtztd5",
        e.target,
        "qS7PHRSRmCNRwiEw5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!"); // Set success message
          setTimeout(() => setSuccessMessage(""), 9000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything! </h3>
          <p className="contact__details">
            Don't like forms?{" "}
            <a
              href="mailto:aliceraj1234@gmail.com"
              className="contact__email-link"
            >
              Send me an email 👋💻
            </a>
            .
          </p>
        </div>

        {/* Flash message for success */}
        {successMessage && (
          <div className="flash-message">{successMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-div">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="send__btn btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
