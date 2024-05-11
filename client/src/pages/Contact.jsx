
export default function Contact() {
  return (
    <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-3" id="contact_us">Contact Us</h2>
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
  )
}
