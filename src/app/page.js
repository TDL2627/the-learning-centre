import React from "react";
import Header from "./components/header";
import Testimonials from "./components/testimonials";
import Staff from "./components/staff";
import Image from "next/image";
import HeroSection from "./components/hero";

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "The Learning Centre",
    url: "https://www.thelearningcentre.co.za",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsJ9Z_BSG8xjKhI8FImZb5BCTKeye9lZCqg&s", // Replace with your school logo URL
    description:
      "Established in 2019, The Learning Centre is an independent, small-group special needs learning platform in Cape Town, Western Cape. We promote each learner's full potential through individually designed programs, integrating ABA and WCED special needs curricula, supported by highly skilled educators in a relaxed, fully equipped environment. Our home away from home.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cape Town",
      addressRegion: "Western Cape",
      postalCode: "7764",
      addressCountry: "ZA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27749594511",
      contactType: "Admissions",
    },
    sameAs: [],
  };

  // Data for the Gallery section
  const galleryImages = [
    {
      src: "/gallery1.jpg",
      alt: "Children doing a sensory activity",
    },
    {
      src: "/g2.jpg",
      alt: "Children playing outdoors",
    },
    {
      src: "/g3.jpg",
      alt: "Children creating art",
    },
    {
      src: "/g4.jpg",
      alt: "Small group learning session",
    },
    {
      src: "/g5.jpg",
      alt: "One-on-one therapy session",
    },
    {
      src: "/g6.jpg",
      alt: "Children enjoying outdoor play",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-inter text-gray-800 scroll-smooth">
      {/* JSON-LD Structured Data - remains within the component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />
        {/* About Us Section */}
        <section
          id="about"
          className="py-16 px-6 md:px-12 bg-white rounded-xl shadow-md mx-auto my-8 max-w-6xl"
        >
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold text-black mb-6">
              About The Learning Centre
            </h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              Established in 2019, The Learning Centre is an independent,
              small-group focused special needs learning platform. We are
              dedicated to providing a nurturing and inclusive environment where
              every child's unique learning requirements are met. Our approach
              promotes expediting the full potential of learners through
              individually specially designed working programs. We integrate the
              **ABA curriculum** and the **WCED special needs curriculum**,
              adapting them to suit each learner's needs, allowing them to
              become who they are meant to be. Boasting a staff of highly
              skilled and caring educators, we ensure your child receives the
              specific attention they need in a fully equipped learning
              environment that provides a relaxed atmosphere conducive to full
              potential learning – truly a home away from home.
            </p>
          </div>
        </section>

        {/* What We Provide Section */}
        <section
          id="what-we-provide"
          className="py-16 px-6 md:px-12 bg-gray-50 rounded-xl shadow-md mx-auto my-8 max-w-6xl"
        >
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold text-black mb-10">
              WHAT WE PROVIDE
            </h3>
            <ul className="list-disc list-inside text-left text-lg max-w-3xl mx-auto space-y-3">
              <li>Safe and secure premises</li>
              <li>Modern spacious learning loving environment</li>
              <li>Affordable fees</li>
              <li>We apply speech therapy and occupational therapy</li>
              <li>Qualified facilitators</li>
              <li>
                Tool kit workshops for parents as well as learning facilities
                migrating to inclusive learning
              </li>
              <li>We follow the ABA curriculum</li>
              <li>Makaton sign language</li>
              <li>Pecs enhanced activities if required</li>
              <li>
                Skills development programs e.g., baking, jewellery, and many
                more
              </li>
              <li>Small groups to accommodate individual learning</li>
              <li>One-on-one teaching methodology</li>
              <li>
                Each child has an individual learning program designed to suit
                their needs
              </li>
            </ul>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="py-16 px-6 md:px-12 bg-gray-50 rounded-xl shadow-md mx-auto my-8 max-w-6xl"
        >
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold text-black mb-10">Our Gallery</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Explore moments from our vibrant learning environment, showcasing
              our students engaged in various activities and benefiting from our
              supportive programs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 h-64 md:h-72"
                >
                  <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <Staff />

        {/* Code of Conduct Section */}
        <section
          id="code-of-conduct"
          className="py-16 px-6 md:px-12 bg-gray-50 rounded-xl shadow-md mx-auto my-8 max-w-6xl"
        >
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold text-black mb-10">
              Code of Conduct
            </h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              At The Learning Centre, we strive for consistency of discipline to
              ensure a positive and productive learning environment for all.
            </p>
            <ul className="list-disc list-inside text-left text-lg max-w-2xl mx-auto space-y-3">
              <li>No late coming.</li>
              <li>Regular attendance is essential.</li>
              <li>No fighting or aggressive behavior.</li>
              <li>
                Late arrivals and late collection of children should be
                communicated in time with the apparent teacher.
              </li>
              <li>
                Sick children should be kept at home to prevent the spread of
                illness.
              </li>
            </ul>
          </div>
        </section>

        {/* School Fees Section */}
        <section
          id="fees"
          className="py-16 px-6 md:px-12 bg-white rounded-xl shadow-md mx-auto my-8 max-w-6xl"
        >
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold text-black mb-6">School Fees</h3>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md inline-block">
              <p className="text-5xl font-extrabold text-green-600 mb-4">
                R 3,300<span className="text-2xl text-black">/month</span>
              </p>
              <p className="text-lg text-black">
                Our monthly school fees are set at R 3,300 per learner. This fee
                covers our comprehensive individualized learning programs,
                access to specialized resources, and dedicated instruction from
                our highly skilled educators.
              </p>

              <p className="text-md text-gray-600 mt-2">
                For a detailed breakdown of fees and any available payment
                plans, please contact our admissions office.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 px-6 md:px-12 bg-white rounded-xl shadow-md mx-auto my-8 max-w-6xl"
        >
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold text-black mb-10">Contact Us</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              We'd love to hear from you! You can reach us via:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <a
                href="mailto:safodienfazlin07@gmail.com"
                className="flex items-center text-lg text-blue-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12z"
                  />
                </svg>
                safodienfazlin07@gmail.com
              </a>
              <a
                href="tel:+27749594511"
                className="flex items-center text-lg text-blue-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                </svg>
                +27749594511
              </a>
              <a
                href="https://wa.me/27123456789?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20school%20from%20the%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg text-blue-600 hover:underline"
              >
                <img
                  src="/whatsapp.svg"
                  alt="wa-icon"
                  className="w-5 h-5 mr-2"
                />
                WhatsApp
              </a>
            </div>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Alternatively, you can fill out the form below:
            </p>
            <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
              <form
                action="https://formspree.io/f/xgednpkq"
                method="POST"
                target="_blank"
              >
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-black text-left"
                  >
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    id="fullName"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-medium text-black text-left"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    id="emailAddress"
                    aria-describedby="emailHelp"
                  />
                  <div
                    id="emailHelp"
                    className="mt-2 text-sm text-gray-500 text-left"
                  >
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-black text-left"
                  >
                    Cell phone number
                  </label>
                  <input
                    type="number"
                    name="number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    id="phoneNumber"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contact"
        className="bg-black text-white py-12 px-6 md:px-12 mt-8 rounded-t-xl shadow-inner"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">The Learning Centre</h4>
            <p className="mb-2">Cape Town, South Africa</p>
            <p className="mb-2">Phone: (+27) 749594511</p>
            <p className="mb-2">Email: safodienfazlin07@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#what-we-provide"
                  className="hover:text-gray-300 transition duration-300"
                >
                  What We Provide
                </a>
              </li>
              <li>
                <a
                  href="#staff"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Our Staff
                </a>
              </li>
              <li>
                <a
                  href="#code-of-conduct"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="#fees"
                  className="hover:text-gray-300 transition duration-300"
                >
                  School Fees
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media*/}

          <div className="text-center mt-8 text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Website created by{" "}
              <a
                href="https://akannemeyer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-600 transition-colors"
              >
                TDL2627
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/27123456789?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20school%20from%20the%20website."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full shadow-lg cursor-pointer transition-colors duration-300 z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <img src="/whatsapp.svg" alt="wa-icon" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default Home;
