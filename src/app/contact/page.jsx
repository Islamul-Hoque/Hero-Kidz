"use client";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        // এখানে তুমি backend API call করতে পারো (e.g. sendEmail)
        alert("Thanks for contacting Hero-Kidz! We’ll reply soon.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Have questions about our toys, orders, or partnerships?
                    Fill out the form below or reach us directly.
                </p>
            </section>

            {/* Contact Form */}
            <div className="card shadow-xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full min-h-[120px]"
                            required
                        ></textarea>

                        <button type="submit" className="btn btn-primary w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Contact Info */}
            <section className="mt-12 grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-base-200 rounded-xl">
                    <h3 className="font-semibold">📍 Address</h3>
                    <p>Chattogram, Bangladesh</p>
                </div>
                <div className="p-6 bg-base-200 rounded-xl">
                    <h3 className="font-semibold">📞 Phone</h3>
                    <p>+880 1234 567890</p>
                </div>
                <div className="p-6 bg-base-200 rounded-xl">
                    <h3 className="font-semibold">✉️ Email</h3>
                    <p>support@herokidz.com</p>
                </div>
            </section>
        </main>
    );
}
