import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Shield, Users, TrendingUp } from "lucide-react";
import Section from "../components/common/Section";
import overviewImage from "../assets/images/wwa.jpeg"; // road/construction image
import valuesImage from "../assets/images/solor-pic.jpg";     // team/construction image

export default function About() {
  return (
    <>
      <Header />
      {/* HERO / PAGE INTRO */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Company Overview
          </h1>
          <p className="mt-4 max-w-3xl text-gray-200 text-lg">
            Ballsbridge Contractors Ltd is a leading company
            specializing in providing high-quality contracting
            and supply services in any industry.
            With a strong commitment to excellence and customer
            satisfaction, Ballsbridge Contractors Ltd has built a
            reputation for delivering top-notch solutions tailored
            to meet the needs of our clients.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <Section title="Who We Are">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-blue-50 p-8 rounded-lg">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, we have honed our skills,
              expanded our capabilities, and established
              strong relationships with clients, suppliers,
              and industry partners. With a rich history of
              delivering excellence, we continue to set new
              standards in different sectors.

            </p>
            <p className="text-gray-700 leading-relaxed">
              With a strong commitment to excellence and customer satisfaction,
              we have built a reputation for delivering top-notch solutions
              tailored to meet the specific needs of our clients.
            </p>
          </div>

          <img
            src={overviewImage}
            alt="Road construction project"
            className="rounded-lg shadow-md object-cover w-full h-64 md:h-80"
          />
        </div>
      </Section>

      {/* VISION & MISSION */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-accent hover:border-accent-hover">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the preferred choice for contractors and suppliers, known
              for our reliability, quality workmanship, and innovative
              solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-accent hover:border-accent-hover">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To exceed client expectations by delivering exceptional services,
              fostering relationships built on trust, and contributing to the
              growth and development of every industry we work with.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <Section title="Our Core Values">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Integrity",
              text: "We conduct business with honesty, transparency, and ethical practices.",
            },
            {
              title: "Quality",
              text: "We strive for excellence in every project, ensuring top-notch workmanship.",
            },
            {
              title: "Customer Satisfaction",
              text: "We prioritize client needs and exceed expectations through dedicated service.",
            },
            {
              title: "Innovation",
              text: "We embrace creativity and continuous improvement to deliver modern solutions.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-white border-2 border-accent p-6 rounded-lg text-center hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg text-primary mb-2">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE SNAPSHOT */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={valuesImage}
            alt="Construction team at work"
            className="rounded-lg shadow-lg object-cover w-full h-72 md:h-96"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Built on Experience & Excellence
            </h3>
            <p className="text-gray-100 leading-relaxed">
              Over the years, we have honed our skills, expanded our capabilities,
              and built strong relationships with clients, suppliers, and
              industry partners. With a rich history of delivering excellence,
              we continue to set new standards across different sectors.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
