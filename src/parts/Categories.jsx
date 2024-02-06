import Button from "../elements/button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <section
        className="container px-6 mx-auto mb-28"
        key={`category-${index1}`}
      >
        <h4 className="text-2xl font-medium text-slate-900 mb-6">
          {category.name}
        </h4>
        <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-7 relative">
          {category.itemId.map((item, index2) => {
            return (
              <div className="" key={`category-${index1}itemId-${index2}`}>
                <div className="rounded-[15px] h-[263px] w-full overflow-hidden transition-transform hover:scale-105">
                  <div className="relative">
                    {item.isPopular && (
                      <div className="tag bg-pink-500 absolute py-2 px-5 text-white top-0 right-0 rounded-bl-lg z-10">
                        Popular <span className="font-light">Choice</span>
                      </div>
                    )}
                    <figure className="object-cover">
                      <img
                        src={
                          item.imageId[0]
                            ? `${import.meta.env.VITE_BASE_API_URL}/${
                                item.imageId[0].imageUrl
                              }`
                            : ""
                        }
                        alt={item.title}
                        className="transition-transform hover:scale-110"
                      />
                    </figure>
                  </div>
                </div>
                <div className="mt-6 -z-30 -bottom-6">
                  <Button
                    type="link"
                    href={`/properties/${item._id}`}
                    className="text-gray-700 block hover:text-pink-500 font-medium text-xl"
                  >
                    <h5 className="">{item.title}</h5>
                  </Button>
                  <span className="text-gray-500">
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  });
}
