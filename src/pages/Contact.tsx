

// export default Contact;
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo/Ballsbridgelogo.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  // Form logic moved to ContactForm component

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
            {/* Contact Info */}
            <div className="relative overflow-hidden rounded-2xl p-12 bg-primary text-primary-foreground">
              <img
                src={logo}
                alt="Ballsbridge Contractors"
                className="h-16 mb-8 object-contain"
              />

              <div className="space-y-6">
                <p className="font-semibold">37 Kwame Nkrumah Crescent, Asokoro, Abuja</p>
                <p className="font-semibold">10 Wharf Road, Apapa, Lagos</p>
                <p className="font-semibold">+234 803 376 9333</p>
                <p className="font-semibold">ballsbridgecontractorsltd@gmail.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-semibold text-blue-700 mb-6">
                Send Us a Message
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
