export default function PageDetailsDec({ data }) {
  return (
    <main className="mr-10 basis-3/6">
      <div className="">
        <h4 className="text-blue-950 text-xl font-medium mb-3">
          About The Place
        </h4>
        <div
          className="text-gray-500 font-light text-base leading-7"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <div className="mt-8 grid grid-cols-4 gap-4 grid-rows-2 mr-3">
          {data.features.map((item, index) => {
            return (
              <div className="mb-5" key={`features${index}`}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="mb-2 block"
                />{" "}
                <span className="">{item.qty}</span>{" "}
                <span className="text-gray-500 font-light">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
