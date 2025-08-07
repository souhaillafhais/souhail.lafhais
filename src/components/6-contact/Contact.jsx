import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animations/Animation - 1722245654191.json";
import mailAnimation from "../../animations/mail.json"

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnapgdj");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail"></span>
        Contact us
      </h1>
      <p className="sub-title">Contact us for more information</p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "25px" }}>
            <label htmlFor="message">Your Message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ... " : "Submit"}
          </button>
          {state.succeeded && (
            <p className="submit flex">
              <Lottie
                loop={false}
                style={{ height: "80px" }}
                animationData={doneAnimation}
              />
              Your message has been sent succesfully!
            </p>
          )}
        </form>
        <div className="animation flex">
          <Lottie
          className="contact-animation"
            style={{ height: "500px", marginRight:"180px",marginBottom:"100px" }}
            animationData={mailAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
