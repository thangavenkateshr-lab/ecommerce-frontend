import {
  Truck,
  ShieldCheck,
  Headphones,
  RefreshCw,
  Star,
} from "lucide-react";

const About = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      rating: 5,
      review:
        "Amazing shopping experience! Fast delivery and premium quality products.",
    },
    {
      id: 2,
      name: "Priya Nair",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 5,
      review:
        "The customer support was excellent. Definitely buying again!",
    },
    {
      id: 3,
      name: "David Wilson",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      rating: 4,
      review:
        "Beautiful website, secure payment and smooth delivery experience.",
    },
  ];

  const features = [
    {
      icon: <Truck size={40} />,
      title: "Free Shipping",
      desc: "Fast delivery on all orders above ₹999.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Payments",
      desc: "100% safe and encrypted payment gateway.",
    },
    {
      icon: <RefreshCw size={40} />,
      title: "Easy Returns",
      desc: "7-day hassle-free return policy.",
    },
    {
      icon: <Headphones size={40} />,
      title: "24/7 Support",
      desc: "Dedicated support whenever you need.",
    },
  ];

  return (
    <div className="bg-gray-100">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Welcome to <span className="text-blue-600">ManiMart</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8">
              ManiMart is your one-stop destination for fashion,
              electronics, accessories and everything you love.
              We believe shopping should be simple, enjoyable and
              affordable.
            </p>

            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 duration-300 hover:scale-105">
              Explore Collection
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935?w=800"
              className="rounded-3xl h-72 object-cover hover:scale-105 duration-500"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800"
              className="rounded-3xl h-72 object-cover mt-12 hover:scale-105 duration-500"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
              className="rounded-3xl h-72 object-cover hover:scale-105 duration-500"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
              className="rounded-3xl h-72 object-cover mt-12 hover:scale-105 duration-500"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

          {[
            ["100K+", "Customers"],
            ["10K+", "Products"],
            ["98%", "Positive Reviews"],
            ["24/7", "Customer Support"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300"
            >
              <h2 className="text-4xl font-bold">{item[0]}</h2>
              <p className="text-gray-500 mt-2">{item[1]}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose ManiMart?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-2xl hover:-translate-y-3 duration-300"
            >
              <div className="flex justify-center text-blue-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-500">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Gallery */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900"
            className="rounded-3xl h-72 object-cover hover:scale-105 duration-500"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
            className="rounded-3xl h-72 object-cover hover:scale-105 duration-500"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900"
            className="rounded-3xl h-72 object-cover hover:scale-105 duration-500"
            alt=""
          />

        </div>

      </section>

      {/* Reviews */}

      <section className="py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          What Our Customers Say
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 duration-300"
            >
              <div className="flex items-center gap-4">

                <img
                  src={review.image}
                  className="w-16 h-16 rounded-full object-cover"
                  alt=""
                />

                <div>
                  <h3 className="font-bold">
                    {review.name}
                  </h3>

                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                </div>

              </div>

              <p className="mt-6 text-gray-600">
                "{review.review}"
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto bg-black rounded-[40px] text-white p-12 text-center">

          <h2 className="text-4xl font-bold">
            Join Thousands of Happy Customers
          </h2>

          <p className="mt-5 text-gray-300">
            Shop the latest fashion, electronics and accessories
            with confidence at ManiMart.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 duration-300">
            Shop Now
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;