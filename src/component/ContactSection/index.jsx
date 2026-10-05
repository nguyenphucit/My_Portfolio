import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../../ValidationSchema/ContactSchema";
export const ContactSection = () => {
  const [status, setStatus] = useState("idle");
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ContactSchema) });
  const onSubmit = async () => {
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_fudgz0v",
        "template_f60ohxp",
        formRef.current,
        "vNpoSUmTKroGKzAsZ",
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="Contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Good things start
            <br />
            with a conversation.
          </h2>
          <p>
            Have a backend opportunity or an interesting project? I’d love to
            hear about it.
          </p>
          <div className="contact-details">
            <a href="mailto:nguyenphucit142002@gmail.com">
              nguyenphucit142002@gmail.com ↗
            </a>
            <a href="tel:+84978736185">+84 978 736 185</a>
            <span>District 4, Ho Chi Minh City, Vietnam</span>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/nguyenphucit"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/phuc-nguyen-901763321/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
          noValidate
        >
          <label htmlFor="contact-name">
            Your name
            <input
              id="contact-name"
              autoComplete="name"
              placeholder="How should I call you?"
              {...register("user_name")}
              aria-invalid={!!errors.user_name}
              aria-describedby={errors.user_name ? "name-error" : undefined}
            />
          </label>
          {errors.user_name && (
            <p id="name-error" className="form-error">
              {errors.user_name.message}
            </p>
          )}
          <label htmlFor="contact-email">
            Email address
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...register("user_email")}
              aria-invalid={!!errors.user_email}
              aria-describedby={errors.user_email ? "email-error" : undefined}
            />
          </label>
          {errors.user_email && (
            <p id="email-error" className="form-error">
              {errors.user_email.message}
            </p>
          )}
          <label htmlFor="contact-message">
            Your message
            <textarea
              id="contact-message"
              placeholder="Tell me a little about what you have in mind…"
              {...register("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
          </label>
          {errors.message && (
            <p id="message-error" className="form-error">
              {errors.message.message}
            </p>
          )}
          <button
            type="submit"
            className="button primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"} ↗
          </button>
          <div aria-live="polite">
            {status === "success" && (
              <p className="form-success">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="form-error">
                Your message could not be sent. Please try again or email me
                directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
