import { FaMapMarkerAlt, FaCreditCard, FaCheckCircle } from "react-icons/fa";

const CheckoutStepper = ({ activeStep }) => {
  const steps = [
    {
      label: "Shipping",
      icon: <FaMapMarkerAlt />,
    },
    {
      label: "Payment",
      icon: <FaCreditCard />,
    },
    {
      label: "Confirm Order",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center w-full max-w-xs"
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg
                ${
                  activeStep >= index
                    ? "bg-red-600"
                    : "bg-gray-300"
                }`}
            >
              {step.icon}
            </div>

            <p
              className={`mt-2 text-sm font-medium ${
                activeStep >= index
                  ? "text-red-600"
                  : "text-gray-400"
              }`}
            >
              {step.label}
            </p>
          </div>

          {index !== steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2 rounded
                ${
                  activeStep > index
                    ? "bg-red-600"
                    : "bg-gray-300"
                }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutStepper;