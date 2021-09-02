import React, { useState, useEffect } from "react";
import "./contact.styles.scss";
import { projectFirestore } from "../../firebase/config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    projectFirestore
      .collection("contacts")
      .add({
        name: name,
        email: email,
        phone: phone,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1 className="main-start">Share your story and we do the rest... </h1>
      <section class="section section-lg pt-lg-0 marginton">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="row row-grid">
                <div class="col-lg-4">
                  <div class="card card-lift--hover shadow border-0">
                    <div class="card-body py-4">
                      <div
                        class="
                      icon icon-shape icon-shape-primary
                      rounded-circle
                      mb-4
                    "
                      >
                        <i class="ni ni-check-bold"></i>
                      </div>
                      <h6 class="text-primary text-uppercase">Real Benefits</h6>
                      <p class="description mt-2">
                        We believe that when supporters purchase, wear, and
                        share pictures in their t-shirts they are showing their
                        love and support for the person in need. We believe this
                        show of support has real benefits in helping recovery.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card card-lift--hover shadow border-0">
                    <div class="card-body py-4">
                      <div
                        class="
                      icon icon-shape icon-shape-success
                      rounded-circle
                      mb-4
                    "
                      >
                        <i class="ni ni-umbrella-13"></i>
                      </div>
                      <h6 class="text-primary text-uppercase">
                        Financial Support
                      </h6>
                      <p class="description mt-2">
                        We know the financial burden these events have on the
                        family. Medical expenses are absolutely ridiculous these
                        days. We hope the money raised will help a little with
                        so many unexpected expenses.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card card-lift--hover shadow border-0">
                    <div class="card-body py-4">
                      <div
                        class="
                      icon icon-shape icon-shape-warning
                      rounded-circle
                      mb-4
                    "
                      >
                        <i class="ni ni-support-16"></i>
                      </div>
                      <h6 class="text-primary text-uppercase">
                        Family & Friends
                      </h6>
                      <p class="description mt-2">
                        The caregiver team has so much on their minds and at the
                        same time, your friends and family want to help. The
                        number of requests "what can we do to help" can become
                        difficult to answer. We provide an answer to that
                        question.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <form className="form" onSubmit={handleSubmit}>
        <h3>Start here 😇 </h3>
        <hr className="horizon" />
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone Number</label>
        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
