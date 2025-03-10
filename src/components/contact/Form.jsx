import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_qwjvuqq", "template_62ma6jg", form.current, "oLfZFvb5ZBKQSRs9p").then(
      (result) => {
        window.alert("Message Sended!");
        e.target.reset();
      },
      (error) => {
        window.alert("Error!");
      }
    );
  };

  return (
    <section className="contact section">
      <div className="contact-container grid">
        <div className="contact-content">
          <h3 className="font-lexand text-3xl font-semibold text-center mb-4">Talk to me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
                <path
                  d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                  stroke="var(--highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3 className="font-semibold font-lexend">Email</h3>
              <span className="contact-card-data mb-2">risyad832@gmail.com</span>

              <a href="mailto:risyad832@gmail.com.com" className="contact-button mb-2">
                Contact me
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>

            <div className="contact-card">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                  fill="var(--highlight)"
                />
              </svg>

              <h3 className="font-semibold font-lexend">Whatsapp</h3>
              <span className="contact-card-data mb-2">089-533-597-6572</span>

              <a href="https://api.whatsapp.com/send?phone=62895335976572&text=Hello, more information!" className="contact-button mb-2">
                Contact me
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="font-lexand text-3xl font-semibold text-center mb-4">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                Name
              </label>
              <input type="text" name="name" className="contact-form-input" placeholder="Insert your name" />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                Email
              </label>
              <input type="email" name="email" className="contact-form-input" placeholder="Insert your email" />
            </div>

            <div className="contact-form-div contact-form-area">
              <label htmlFor="" className="contact-form-tag">
                Project
              </label>
              <textarea name="project" cols="30" rows="10" className="contact-form-input" placeholder="Write your project here!"></textarea>
            </div>

            <button type="submit" className="cursor-pointer text-sm font-medium text-[var(--bg-900)] bg-[var(--highlight)] rounded-full px-8 py-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
