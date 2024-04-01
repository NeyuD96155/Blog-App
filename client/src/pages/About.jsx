export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          We are dedicated to providing the best experience possible for our
          users, offering high-quality, accessible, and user-friendly web
          solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make the web a better place by offering
            high-quality, accessible, and user-friendly web solutions.
          </p>

          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-gray-600">
            Our team consists of passionate professionals from various fields
            including web development, design, and content creation.
          </p>
        </div>

        <div>
          <img
            src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/431967716_374519792133827_6034820787170545564_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nlv9ICOQcvwAX9iE71v&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDR0QLsA2J3xHWsTptcEBMmD-OEuX0XPd6QP8XFeK9lbg&oe=66106F92"
            alt="Our Team"
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="mailto:contact@example.com"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://twitter.com/OurCompany"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
