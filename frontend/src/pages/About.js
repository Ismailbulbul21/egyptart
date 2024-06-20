import React, { useState } from 'react';
import Testimonial1Image from '../images/360_F_571912904_2FymjuUT1mlvDmKjPfQV2AYxLuYFMxgO-removebg-preview.png';
import Testimonial2Image from '../images/bed.jpg';
import Testimonial3Image from '../images/update.png';

const About = () => {
  const [faqs, setFaqs] = useState([
    { question: 'What is Egypt Arts?', answer: 'Egypt Arts is dedicated to bringing the essence of Egyptian culture into modern furniture design.' },
    { question: 'When was Egypt Arts founded?', answer: 'Egypt Arts was founded in [year of establishment], blending traditional craftsmanship with contemporary aesthetics.' },
    { question: 'Where does Egypt Arts get its inspiration?', answer: 'We draw inspiration from Egypt’s rich cultural heritage, incorporating it into each piece of furniture.' },
    { question: 'How does Egypt Arts ensure quality?', answer: 'We ensure quality through meticulous craftsmanship and strict quality control measures.' },
    { question: 'Why choose Egypt Arts over other furniture companies?', answer: 'Egypt Arts offers unique designs rooted in Egyptian traditions, coupled with exceptional customer service and transparency.' },
  ]);

  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'John Doe', image: Testimonial1Image, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum ante at vestibulum.' },
    { id: 2, name: 'Jane Smith', image: Testimonial2Image, text: 'Fusce quis feugiat magna. Ut aliquet lacus vitae libero vehicula, at tristique ligula condimentum.' },
    { id: 3, name: 'Michael Brown', image: Testimonial3Image, text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-gradient-to-t from-green-200 to-purple-200 ">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center pt-12 tracking-widest ">About Egypt Arts</h2>

          <div className="space-y-12">
            {/* Company Overview */}
            <section className="bg-gradient-to-b from-gray-100 to-white bg-opacity-90 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-lg mb-4">
                Egypt Arts is dedicated to bringing the essence of Egyptian culture into modern furniture design. Founded in [year of establishment], we have been passionate about blending traditional craftsmanship with contemporary aesthetics.
              </p>
              <p className="text-lg">
                Our commitment to quality and authenticity ensures that each piece of furniture we offer carries a piece of Egypt’s rich heritage.
              </p>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gradient-to-b from-white to-gray-100 bg-opacity-90 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">What Our Customers Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex flex-col items-center space-y-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full" />
                    <div className="text-center">
                      <p className="text-lg font-semibold">{testimonial.name}</p>
                      <p className="text-lg">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="  bg-gradient-to-t from-white to-gray-200 bg-opacity-90 rounded-lg shadow-md p-6 mx-auto max-w-3xl">
              <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} onClick={() => toggleAccordion(index)} className="cursor-pointer">
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <p className="text-lg font-semibold">{faq.question}</p>
                      <svg className="w-6 h-6 text-gray-500 transform transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path d={activeIndex === index ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M5 10l7-7m0 0l7 7m-7-7"} />
                      </svg>
                    </div>
                    {activeIndex === index && (
                      <p className="text-lg mt-2">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
