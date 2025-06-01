import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "The Learning Centre has been a true blessing for my child. The individualized attention and caring staff have made an incredible difference in their progress and confidence. It truly feels like a second home.",
      author: "Kasifa Adams",
    },
    {
      quote:
        "Fazlin's tutoring of Timothy greatly impacted our lives as a family and we have never looked back. Timothy was taught to understand language although he cannot speak. He clearly understands what is said to him most of the time. Life became a lot easier for us to communicate with Timothy and he uses his hand gestures to communicate with us. The progress of Timothy can only be attributed to the dedicated staff/team of the Learning Centre!",
      author: "Ivan, Karen and Timothy",
    },
    {
      quote:
        "Since my daughter started at The Learning Centre in October 2020, she has improved in leaps and bounds. Her communication has improved, her interest in school work has peaked and she has become more social with her peers.",
      author: "Bahijah",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 px-6 md:px-12 bg-white rounded-xl shadow-md mx-auto my-8 max-w-6xl"
    >
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-black mb-10">
          What Our Families Say
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Hear directly from the parents and guardians whose children have
          blossomed at The Learning Centre.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              {/* Image tag removed */}
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-800">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
