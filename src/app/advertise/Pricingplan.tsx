import { Check, CreditCard, ArrowRight } from "lucide-react";
import ContactSection from "./ContactSection";



export default function Pricingplan() {
  const features = [
    "Ggff",
    "Advanced Analytics",
    "Social Media Promotion",
    "Newsletter Feature",
    "Priority Support",
    "Custom Integrations",
  ];

  return (

    <div className="flex ">
    <div className="max-w-md mx-auto">
      <div className=" rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-green-700 bg-green-100">
            Most Popular
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 inline">
            Premium Plan
          </h3>
          <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-gray-600 bg-gray-100">
            basic
          </span>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          <p className="text-4xl sm:text-5xl font-bold text-gray-900">
            $1.00
            <span className="text-lg sm:text-xl font-normal text-gray-500 ml-1">
              /30 days
            </span>
          </p>
          <p className="text-sm text-gray-400 mt-1">asdasd</p>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
            <CreditCard className="w-5 h-5" />
            Pay with Stripe
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="w-full bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-4 rounded-xl border border-gray-200 flex items-center justify-center gap-1 transition-colors">
            Pay with PayPal
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>




{/*---------------another section-------------------*/}

<div>

<ContactSection></ContactSection>







    </div>







    </div>
  );
}