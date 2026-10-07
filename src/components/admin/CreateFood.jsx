import { useState } from "react";

export default function AddFood() {
  const [food, setFood] = useState({
    name: "",
    price: "",
    offer: "",
    category: "",
    description: "",
    isVeg: true,
    isAvailable: "available",
    isOpen: true,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFood({ ...food, [name]: checked });
    } else if (type === "file") {
      setFood({ ...food, images: [...files] });
    } else {
      setFood({ ...food, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(food);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4 md:p-2">
      <div className="w-full max-w-5xl h-[95vh] bg-white rounded-2xl shadow-lg border flex flex-col overflow-hidden">

        {/* Header */}
        <div className="border-b p-5 md:p-6 shrink-0">
          <h1 className="text-2xl md:text-3xl font-bold">
            Add New Food
          </h1>

          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Fill the details below to add a new food item.
          </p>
        </div>

        {/* Scrollable Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block font-medium mb-2">
                Food Name
              </label>

              <input
                type="text"
                name="name"
                value={food.name}
                onChange={handleChange}
                placeholder="Chicken Burger"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Category
              </label>

              <select
                name="category"
                value={food.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">Select Category</option>
                <option>Burger</option>
                <option>Pizza</option>
                <option>Biryani</option>
                <option>Drinks</option>
                <option>Dessert</option>
                <option>South Indian</option>
                <option>Chinese</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Price (₹)
              </label>

              <input
                type="number"
                name="price"
                value={food.price}
                onChange={handleChange}
                placeholder="250"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Offer (%)
              </label>

              <input
                type="number"
                name="offer"
                value={food.offer}
                onChange={handleChange}
                placeholder="20"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

          </div>

          <div>
            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={food.description}
              onChange={handleChange}
              placeholder="Write food description..."
              className="w-full border rounded-lg px-4 py-3 resize-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Upload Images
            </label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <label className="block font-medium mb-2">
                Food Type
              </label>

              <select
                value={food.isVeg}
                onChange={(e) =>
                  setFood({
                    ...food,
                    isVeg: e.target.value === "true",
                  })
                }
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value={true}>Veg</option>
                <option value={false}>Non Veg</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Availability
              </label>

              <select
                name="isAvailable"
                value={food.isAvailable}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="available">Available</option>
                <option value="out of stock">Out Of Stock</option>
              </select>
            </div>

            <div className="flex items-center gap-3 md:mt-9">
              <input
                type="checkbox"
                name="isOpen"
                checked={food.isOpen}
                onChange={handleChange}
                className="w-5 h-5"
              />

              <label className="font-medium">
                Restaurant Open
              </label>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">

            <button
              type="reset"
              className="px-6 py-3 border rounded-lg hover:bg-gray-100"
            >
              Reset
            </button>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Add Food
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}