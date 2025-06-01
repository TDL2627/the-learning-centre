import React from "react";
import Image from "next/image"; // Ensure you have next/image installed
const staffMembers = [
  {
    name: "Fazlin Safodien-Ullah",
    role: "Principal & Teacher",
    image: "/staff1.jpg",
  },
  {
    name: "Shihaam Amardien",
    role: "Teacher",
    image: "/staff2.jpg",
  },
  {
    name: "Yugmiena Abdol",
    role: "Teacher's Assistant",
    image: "/staff3.jpg",
  },
];

const Staff = () => {
  return (
    <section
      id="staff"
      className="py-16 px-6 md:px-12 bg-white rounded-xl shadow-md mx-auto my-8 max-w-6xl"
    >
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-black mb-10">
          Meet Our Dedicated Staff
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={192} // Matches w-48
                height={192}
                className="rounded-full object-cover object-top mb-6 border-4 border-gray-200 hover:scale-105 transition-transform duration-300"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
