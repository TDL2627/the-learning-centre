import React from 'react';

const staffMembers = [
  {
    name: "Fazlin Safodien-Ullah",
    role: "Principal & Teacher",
    image: "https://placehold.co/150x150/E0E0E0/333333?text=Person1",
  },
  {
    name: "Shihaam Amardien",
    role: "Teacher",
    image: "https://placehold.co/150x150/E0E0E0/333333?text=Person2",
  },
  {
    name: "Yugmiena Abdol",
    role: "Teacher's Assistant",
    image: "https://placehold.co/150x150/E0E0E0/333333?text=Person3",
  },
];

const Staff = () => {
  return (
    <section id="staff" className="py-16 px-6 md:px-12 bg-white rounded-xl shadow-md mx-auto my-8 max-w-6xl">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-black mb-10">Meet Our Dedicated Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-36 h-36 object-cover mb-4 border-4 border-gray-200"
              />
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
