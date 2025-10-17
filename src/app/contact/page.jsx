import Link from "next/link";

const ContactPage = () => {
  const homeLink = "/";

  return (
    <div className="bg-teal-800 w-full min-h-screen flex flex-col justify-center items-center text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <Link
        href={homeLink}
        className="bg-white text-black px-5 py-2 rounded-2xl mb-6"
      >
        Home Page
      </Link>

      
      <section className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl">
        {/* Partie image */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <img
            src="https://i.postimg.cc/g2xW06XH/istockphoto-2057714474-612x612.jpg"
            className="h-full w-full object-cover"
            alt="Contact illustration"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-semibold text-center px-4">
              Let's Make Something Memorable
            </h2>
          </div>
        </div>

        {/* Partie formulaire */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <form className="space-y-4 text-black">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
