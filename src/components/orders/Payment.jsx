import CheckoutStepper from "./CheckoutStepper";

const Payment = () => {
  return (
    <div className="py-20">
      <CheckoutStepper activeStep={1} />
      <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Payment</h2>
        {/* Razorpay / Stripe */}
        <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;