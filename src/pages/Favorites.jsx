// Favorites.jsx

import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/slices/favoriteSlice";
import toast from "react-hot-toast";
import PageName from "../components/reuseable/PageName";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0) {
    return (
      <>
        <section className="text-center w-[80%] mx-auto">
          <PageName title="Favorite" />
          <p className="text-center mt-10 text-xl">No favorites added yet ❤️</p>
        </section>
      </>
    );
  }

  const handleRemove = (id, name) => {
    dispatch(removeFavorite(id));

    toast.error(`${name} removed from favorites ❌`, {
      style: {
        border: "1px solid #f87171",
        padding: "16px",
        color: "#b91c1c",
        background: "#fff0f0",
        fontWeight: "bold",
      },
      iconTheme: {
        primary: "#b91c1c",
        secondary: "#fff0f0",
      },
    });
  };
  return (
    <>
      <section className="text-center w-[80%] mx-auto">
        <PageName title="Favorite" />
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 object-contain mb-2"
              />

              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-primary font-bold">Rs {item.price}</p>

              <button
                className="mt-3 bg-red-500 text-white px-4 py-1 rounded"
                onClick={() => handleRemove(item.id, item.name)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Favorites;
