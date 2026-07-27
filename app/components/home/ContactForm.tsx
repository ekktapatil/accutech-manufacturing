"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded-lg p-3"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
        />

        <input
          className="w-full border rounded-lg p-3"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          className="w-full border rounded-lg p-3"
          rows={6}
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}