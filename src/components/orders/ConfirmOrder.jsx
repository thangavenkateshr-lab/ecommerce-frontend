import CheckoutStepper from "./CheckoutStepper";

const ConfirmOrder = () => {
  return (
    <>
      <CheckoutStepper activeStep={2} />

      <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          Confirm Order
        </h2>

        {/* Shipping Details */}

        {/* Cart Items */}

        {/* Price Summary */}

        <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg">
          Place Order
        </button>
      </div>
    </>
  );
};

export default ConfirmOrder;