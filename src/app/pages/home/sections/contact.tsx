export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gradient-yellow-orange">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Contact Me
          </h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-primary p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }