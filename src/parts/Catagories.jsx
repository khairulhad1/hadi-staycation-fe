import Button from "../elements/button";

export default function Catagories({ data }) {
  return data.map((catagory, index1) => {
    return (
      <section className="container mx-auto mb-28" key={`catagory-${index1}`}>
        <h4 className="text-2xl font-medium text-slate-900 mb-6">
          {catagory.name}
        </h4>
        <div className="grid grid-cols-4 gap-7 relative">
          {catagory.items.length === 0 ? (
            <div className="">
              <div className="mx-auto">
                there is not property at this catagory
              </div>
            </div>
          ) : (
            catagory.items.map((item, index2) => {
              return (
                <div className="" key={`catagory-${index1}items-${index2}`}>
                  <div className="rounded-[15px] h-[263px] w overflow-hidden transition-transform hover:scale-105">
                    <div className="relative">
                      {item.isPopular && (
                        <div className="tag bg-pink-500 absolute py-2 px-5 text-white top-0 right-0 rounded-bl-lg z-10">
                          Popular <span className="font-light">Choice</span>
                        </div>
                      )}
                      <figure className="object-cover">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
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
                      <h5 className="">{item.name}</h5>
                    </Button>
                    <span className="text-gray-500">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
