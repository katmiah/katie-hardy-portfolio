import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <div className="contact-form">
          <h1>Contact me</h1>
          <section className="contact-form-section" id="contactForm">
            <div className="form-wrapper">
              <form onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="user_name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                  </div>
                </div>
                <div className="form-message">
                  <label>Message</label>
                  <textarea name="message" required />
                  <input type="submit" value="Send" disabled={isSubmitting} />
                  {stateMessage && <p>{stateMessage}</p>}
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export default ContactForm;
