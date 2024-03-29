import React from "react"
import { navigate } from "gatsby"
import DatePicker from "react-date-picker"
import Button from "./Button"

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
      people: "1",
      charter: "Ground Fishing Charter",
      referral: "Google search",
      message: "",
      requestedDate: new Date(),
      calendarFocused: false,
      error: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  onDateChange = requestedDate => {
    if (requestedDate) {
      this.setState(() => ({ requestedDate }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  handleSubmit = e => {
    e.preventDefault()

    if (!this.state.name || !this.state.email || !this.state.phone) {
      this.setState(() => ({
        error: "Please provide your name, email, and phone number",
      }))
    } else {
      // Clear the error
      this.setState(() => ({ error: "" }))

      const form = e.target
      const name = this.state.name

      fetch("/book-now", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": form.getAttribute("name"), ...this.state }),
      })
        .then(() =>
          navigate(form.getAttribute("action"), {
            state: { name },
          })
        )
        .catch(error => alert(error))
    }
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
        {this.state.error && <p className="form-error">{this.state.error}</p>}
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
              autoComplete="name"
              value={this.state.name}
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
              autoComplete="email"
              value={this.state.email}
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
              autoComplete="tel"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <div>
          <label className="same-line">
            Date:{" "}
            <DatePicker
              name="requestedDate"
              value={this.state.requestedDate}
              onChange={this.onDateChange}
              clearIcon={null}
              minDate={new Date()}
            />
          </label>
        </div>
        <p>
          <label className="same-line">
            Number of People:{" "}
            <select
              name="people"
              value={this.state.people}
              onBlur={(e) => e.preventDefault()}
              onChange={this.handleChange}
              required
            >
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
            <select
              name="charter"
              value={this.state.charter}
              onBlur={(e) => e.preventDefault()}
              onChange={this.handleChange}
              required
            >
              <option value="Commercial Tuna Charter">
                Commercial Tuna Charter
              </option>
              <option value="Custom Charter">Custom Charter</option>
              <option value="Ground Fishing Charter">
                Ground Fishing Charter
              </option>
              <option value="Private Boat Hire">Private Boat Hire</option>
            </select>
          </label>
        </p>
        <p>
          <label className="same-line">
            How did you hear about us?{" "}
            <select
              name="referral"
              value={this.state.referral}
              onBlur={(e) => e.preventDefault()}
              onChange={this.handleChange}
              required
            >
              <option value="Google search">
                Google search
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Fishingbooker.com">
                Fishingbooker.com
              </option>
              <option value="Northshore Magazine">Northshore Magazine</option>
              <option value="I've seen your boat on the water">I've seen your boat on the water</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              id="message"
              name="message"
              rows="6"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <Button title="Send" type="submit" />
      </form>
    )
  }
}
export default ContactForm
