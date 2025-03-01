import React from "react";
import { FaStar } from "react-icons/fa";
import Breadcrum from "../components/Breadcrum";

const reviews = [
  {
    id: 1,
    name: "Arjun Sharma",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    rating: 5,
    message:
      "The design work was exceptional. The attention to detail and creativity exceeded our expectations.",
  },
  {
    id: 2,
    name: "Priya Kapoor",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
    message:
      "Great collaboration and communication throughout the project. Could have been more efficient in time management.",
  },
  {
    id: 3,
    name: "Ravi Verma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    message:
      "Highly professional team. They listened to all our needs and delivered a design that perfectly matched our vision.",
  },
  {
    id: 4,
    name: "Neha Patel",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 3,
    message:
      "Overall experience was good. The architectural design was great, but a bit more timely responses would have been appreciated.",
  },
  {
    id: 5,
    name: "Manish Kumar",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 4,
    message:
      "The architects were knowledgeable and creative, though the process could have been a bit smoother and faster.",
  },
  {
    id: 6,
    name: "Anjali Reddy",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
    message:
      "Amazing design and incredible attention to detail. The team’s vision brought our project to life beyond our imagination!",
  },
  {
    id: 7,
    name: "Suresh Gupta",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 4,
    message:
      "Very satisfied with the final design. The architects were professional, though I would have liked better communication on timelines.",
  },
  {
    id: 8,
    name: "Sanya Mehta",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 5,
    message:
      "Absolutely fantastic experience. The architects understood our needs and created an innovative and functional design.",
  },
  {
    id: 9,
    name: "Vikram Singh",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    rating: 3,
    message:
      "The design was decent, but I expected more innovative solutions. Still, the execution was satisfactory.",
  },
  {
    id: 10,
    name: "Isha Desai",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 4,
    message:
      "Good overall experience. The design was solid, though there was room for improvement in the project management and response times.",
  },
  {
    id: 11,
    name: "Karan Mehra",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    message:
      "Incredible vision and execution. The final product was exactly what I envisioned. Would definitely work with them again.",
  },
  {
    id: 12,
    name: "Shreya Mishra",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
    message:
      "Impressive design and creative ideas. Could improve the responsiveness to emails and calls, but overall a positive experience.",
  },
  {
    id: 13,
    name: "Rohit Singh",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    rating: 5,
    message:
      "Amazing project. The architects understood our vision and executed it with precision and style. Very professional.",
  },
  {
    id: 14,
    name: "Aditi Sharma",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    rating: 4,
    message:
      "The designs were top-notch. The project ran smoothly but some of the delays in the process could have been avoided.",
  },
  {
    id: 15,
    name: "Abhishek Yadav",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
    message:
      "Couldn’t be happier with the design and the entire team’s effort. They truly transformed our space with thoughtful design solutions.",
  },
];

const TestimonialPage = () => {
  return (
    <>
      <Breadcrum
        title="Client Reviews"
        items={[
          { label: "Home", link: "/" },
          { label: "Testimonials", link: "/testimonial" },
        ]}
      />
      <div className="container mx-auto px-6 py-10">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex text-yellow-500">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.message}</p>
          </div>
        ))}
      </div> */}
        <iframe src="https://widget.tagembed.com/2156635" className="w-full min-h-[170vh] " aria-label="review"></iframe>
      </div>
    </>
  );
};

export default TestimonialPage;
