import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-10">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="flex gap-4 items-center">
        <MapPin className="h-6 w-6 text-blue-600" />
        <p>123 Example Street, Lagos, Nigeria</p>
      </div>
      <div className="flex gap-4 items-center">
        <Phone className="h-6 w-6 text-green-600" />
        <p>+234 700 000 0000</p>
      </div>
      <div className="flex gap-4 items-center">
        <Mail className="h-6 w-6 text-red-600" />
        <p>info@ballsbridge.ng</p>
      </div>
    </div>
  );
};

export default Contact;
