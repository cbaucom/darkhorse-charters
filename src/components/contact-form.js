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
    this.state = {}
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/book-now", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...this.state }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Phone:{" "}
            <input
              type="tel"
              name="phone"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label className="same-line">
            Number of People:{" "}
            <select name="people[]" onChange={this.handleChange} required>
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
          <label className="same-line">
            Charter:{" "}
            <select name="charter[]" onChange={this.handleChange} required>
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
              id="message"
              name="message"
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
