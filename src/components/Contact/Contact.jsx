import { useState } from "react";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      inquiryType: "general",
      message: "",
    });
    // Reset form submission state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <>
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

          {/* Contact Form */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Get in Touch
            </h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              {submitted ? (
                <div className="text-green-400 p-4 mb-4 bg-green-900 bg-opacity-20 rounded-lg">
                  Thank you for your message! We will get back to you as soon as
                  possible.
                </div>
              ) : null}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="inquiryType"
                    className="block text-gray-400 mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="general">General Question</option>
                    <option value="technical">Technical Support</option>
                    <option value="content">Content Suggestion</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How do I submit a movie for review?
                </h3>
                <p className="text-gray-400">
                  You can suggest movies for our team to review by using the
                  Content Suggestion option in our contact form. Please include
                  the movie title, year, and why you think it deserves a review.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How can I join your team?
                </h3>
                <p className="text-gray-400">
                  We're always looking for passionate film enthusiasts to join
                  our community. Send us your resume and a sample review using
                  the "Partnership Inquiry" option in our contact form.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  How often do you update the site?
                </h3>
                <p className="text-gray-400">
                  We add new reviews and content daily. Major site updates and
                  new features are typically rolled out monthly.
                </p>
              </div>
            </div>
          </section>

          {/* Direct Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Alternative Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Email Departments
                </h3>
                <ul className="text-gray-400 space-y-2">
                  <li>
                    <span className="text-gray-300">General Inquiries:</span>{" "}
                    info@cinemavault.com
                  </li>
                  <li>
                    <span className="text-gray-300">Technical Support:</span>{" "}
                    support@cinemavault.com
                  </li>
                  <li>
                    <span className="text-gray-300">Content Team:</span>{" "}
                    content@cinemavault.com
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4 text-gray-400">
                  <a
                    href="#"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    YouTube
                  </a>
                </div>
                <p className="mt-2 text-gray-400">
                  We typically respond to messages within 24-48 hours during
                  business days.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
