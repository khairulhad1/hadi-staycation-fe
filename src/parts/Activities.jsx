import Button from "../elements/button";

export default function Activities({ data }) {
  if (data.length === 0) return null;
  return (
    <section className="container mx-auto px-6 mb-28">
      <h4 className="text-2xl font-medium text-slate-900 mb-6">Activities</h4>
      <div className="flex flex-wrap lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:gap-7 relative">
        {data.activityId.map((item, index2) => {
          return (
            <div className="" key={`activity-itemId-${index2}`}>
              <div className="rounded-[15px] h-[263px] w overflow-hidden transition-transform hover:scale-105">
                <div className="relative">
                  {data.isPopular && (
                    <div className="tag bg-pink-500 absolute py-2 px-5 text-white top-0 right-0 rounded-bl-lg z-10">
                      Popular <span className="font-light">Choice</span>
                    </div>
                  )}
                  <figure className="object-cover">
                    <img
                      src={`${import.meta.env.VITE_BASE_API_URL}/${
                        item.imageUrl
                      }`}
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
                <span className="text-gray-500">{item.type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
