import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function RequestQuoteForm() {
  const [state, handleSubmit] = useForm("mwprwddy"); // your Formspree ID

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-semibold text-center mt-4">
        ✅ Thank you! Your request has been sent successfully.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Request a Quote
      </h2>

      <label className="block text-gray-700 mb-1" htmlFor="name">
        Full Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      <label className="block text-gray-700 mb-1" htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label className="block text-gray-700 mb-1" htmlFor="phone">
        Phone Number
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      <label className="block text-gray-700 mb-1" htmlFor="message">
        Project Details
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        placeholder="Describe your project or request..."
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        {state.submitting ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
