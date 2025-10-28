import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss custom advertising packages tailored to your specific needs.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
            <Mail className="w-5 h-5" />
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}