import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_c7r8g66", // ✅ your Service ID
        "template_57z0ca4", // ✅ your Template ID
        form.current,
        "O_Y3-axyGyv644-NH" // ✅ your Public Key
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setIsSending(false);
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.status, error.text);
          setMessage("❌ Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you. Fill the form below and we’ll get back to
          you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6 bg-white shadow-lg p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Contact Information
          </h2>

          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-blue-600" />
            <p>123 Example Street, Abuja, Nigeria</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-green-600" />
            <p>+234 700 000 0000</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-red-600" />
            <p>info@ballsbridge.ng</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Send Us a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={5}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-xl text-white transition-all duration-300 ${
                isSending ? "bg-blue-400" : "bg-blue-700 hover:bg-blue-800"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p
                className={`text-center text-sm mt-3 font-medium ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
