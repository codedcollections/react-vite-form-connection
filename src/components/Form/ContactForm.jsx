import { useState } from "react"

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    if (form.website) {
      return
    }
    e.preventDefault()

    await fetch(
      "https://script.google.com/macros/s/AKfycbxrLhmXXowA7BzPDqo8jhsVKdhpP8rHe5SiC6Zy48bSTzXwkcFslLZom5OXMSef3mrR/exec",
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    alert("Form submitted!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input name="name" id="name" onChange={handleChange} required />
      <br />
      <label htmlFor="email">email:</label>
      <input
        name="email"
        id="email"
        type="email"
        onChange={handleChange}
        required
      />{" "}
      <br />
      <label htmlFor="message">message:</label>
      <textarea name="message" id="message" onChange={handleChange} required />
      <input
        type="text"
        name="website"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
