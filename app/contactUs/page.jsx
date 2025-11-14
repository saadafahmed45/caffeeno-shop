export default function ContactUs() {
  return (
    <section className="bg-gray-100 py-12 px-4 max-w-7xl mx-auto my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p>123 Main Street, City, Country</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p>contact@yourdomain.com</p>
          </div>
        </div>
        {/* Contact Form */}
        <form
          className="bg-white p-8 rounded shadow space-y-4"
          action="#"
          method="POST"
        >
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
