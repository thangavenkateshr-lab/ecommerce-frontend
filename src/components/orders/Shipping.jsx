import Address from "../users/Address";
import CheckoutStepper from "./CheckoutStepper";

const Shipping = () => {
  return (
    <div className="mt-40">
      <CheckoutStepper activeStep={0} />

      <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
        <Address/>
      </div>
    </div>
  );
};

export default Shipping;