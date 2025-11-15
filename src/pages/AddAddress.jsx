import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pickup from "../assets/pickup.png";
import { LuPhone } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";

const AddAddress = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.user);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = totalPrice * 0.16;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Thank You {user?.name || ""} for Your Order!
        </h1>
        <p className="text-gray-700 mb-6">
          Your payment will be collected on delivery.
        </p>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="font-semibold text-lg mb-2">Order Summary</h2>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-600">
                      Rs {item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">Rs {item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <hr className="my-2" />
          <div className="flex justify-between font-semibold">
            <p>Subtotal:</p>
            <p>Rs {totalPrice.toLocaleString()}</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>GST (16%):</p>
            <p>Rs {tax.toFixed(0)}</p>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <p>Total:</p>
            <p>Rs {totalPrice.toLocaleString()}</p>
          </div>
        </div>

        {/* Delivery/Pickup Info */}
        <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-3 mb-4">
          <img src={Pickup} alt="Pickup" className="w-12 h-12" />
          <div className="text-left">
            <p className="font-semibold">Pickup From:</p>
            <p className="text-gray-700">Sargodha</p>
            <p className="flex items-center gap-2 text-gray-700">
              <LuPhone /> 03377763915
            </p>
          </div>
        </div>

        {/* Navigation Button */}
        <Link
          to="/exploremenu"
          className="inline-block mt-4 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default AddAddress;
