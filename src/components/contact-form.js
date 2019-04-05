import React from "react"
import { navigate } from "gatsby"

import Button from "./button"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
      people: "",
      charter: "",
      message: "",
    }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/book-now", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => navigate("/thank-you/"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, phone, people, charter, message } = this.state
    return (
      <form
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Phone:{" "}
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Number of People:{" "}
            <select name="people[]" value={people}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <select name="charter[]" value={charter}>
              <option value="Commercial Tuna Charter">
                Commercial Tuna Charter
              </option>
              <option value="Bass Charter">Bass Charter</option>
              <option value="Ground Fishing Charter">
                Ground Fishing Charter
              </option>
              <option value="Private Boat Hire">Private Boat Hire</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <Button title="Send" type="submit" />
        </p>
      </form>
    )
  }
}
export default ContactForm
