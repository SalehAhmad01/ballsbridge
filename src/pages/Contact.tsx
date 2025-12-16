import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo/Ballsbridgelogo.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6 md:px-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-700 mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We’d love to hear from you. Fill the form below and we’ll get back
              to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Branded Contact Panel */}
            <div className="relative overflow-hidden rounded-2xl p-12 bg-primary text-primary-foreground">
              <img src={logo} alt="Ballsbridge Contractors" className="h-16 mb-8 object-contain" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white p-2 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white">
                      <MapPin className="h-3 w-3" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Suit 01, Nusaiba Towers, Plot 117, Ahmadu Bello Way, Mabushi, Abuja.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white p-2 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white">
                      <MapPin className="h-3 w-3" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">10 Wharf Road Apapa, Lagos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white p-2 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white">
                      <Phone className="h-3 w-3" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">+234 803 376 9333</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white p-2 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white">
                      <Mail className="h-3 w-3" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">halifa@ballsbridgecontractors.com</p>
                  </div>
                </div>
              </div>

              {/* Decorative shapes (triangle + diagonal) */}
              <svg className="absolute right-0 bottom-0 w-48 h-48" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,0 100,100 0,100" style={{ fill: "var(--accent)" }} />
              </svg>

              <svg className="absolute left-0 bottom-0 w-80 h-48 opacity-10" viewBox="0 0 200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,0 200,100 0,100" style={{ fill: "white" }} />
              </svg>
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
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
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
                      message.startsWith("✅")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
