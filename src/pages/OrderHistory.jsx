import { useSelector } from "react-redux";


const OrderHistory = () => {
  const orders = useSelector((state) => state.orders.list);

  return (
    <section className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-lg mb-4 bg-white shadow">
            <h2 className="font-bold">Order #{order.id}</h2>
            <p>Date: {order.date}</p>
            <p>Total: Rs {order.total}</p>

            <h3 className="mt-2 font-semibold">Items:</h3>
            {order.items.map((item, index) => (
              <div key={index} className="text-sm">
                {item.name} — {item.quantity} × Rs {item.price}
              </div>
            ))}
          </div>
        ))
      )}
    </section>
  );
};

export default OrderHistory;
