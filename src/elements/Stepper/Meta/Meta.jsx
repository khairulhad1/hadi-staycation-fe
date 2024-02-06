export default function Meta({ data, current }) {
  return (
    <div className="text-center mt-10 mb-8 ">
      <h1 className="text-center text-2xl text-blue-950 lg:text-4xl font-semibold">
        {data[current] && data[current].title}
      </h1>
      <p className="text-center text-sm text-zinc-400 lg:text-lg font-light">
        {data[current] && data[current].description}
      </p>
    </div>
  );
}
