import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState("");

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setMessage("");

        if (!form.current) return;

        const formData = new FormData(form.current);

        const templateParams = {
            from_name: formData.get("from_name"),
            reply_to: formData.get("reply_to"),
            message: formData.get("message"),
        };

        try {
            // 1️⃣ Send message to COMPANY
            await emailjs.send(
                "service_pb5l2p6",              // Service ID
                "template_3fsbqn2",     // COMPANY template ID
                templateParams,
                "O_Y3-axyGyv644-NH"              // Public Key
            );

            // 2️⃣ Send AUTO-REPLY to CLIENT
            await emailjs.send(
                "service_pb5l2p6",              // Same Service ID
                "template_2cztfvw",          // AUTO-REPLY template ID
                templateParams,
                "O_Y3-axyGyv644-NH"
            );

            setMessage("✅ Message sent successfully! We will contact you shortly.");
            form.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setMessage("❌ Failed to send message. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full border border-gray-300 rounded-xl p-3"
                    placeholder="Saleh Ahmad"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    name="reply_to"
                    required
                    className="w-full border border-gray-300 rounded-xl p-3"
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
                    rows={5}
                    className="w-full border border-gray-300 rounded-xl p-3"
                    placeholder="Write your message..."
                />
            </div>

            <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 rounded-xl text-white ${isSending
                    ? "bg-blue-400"
                    : "bg-blue-700 hover:bg-blue-800"
                    }`}
            >
                {isSending ? "Sending..." : "Send Message"}
            </button>

            {message && (
                <p
                    className={`text-center text-sm mt-3 font-medium ${message.startsWith("✅")
                        ? "text-green-600"
                        : "text-red-600"
                        }`}
                >
                    {message}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
