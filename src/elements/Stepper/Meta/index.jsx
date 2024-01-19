export default function Meta({ data, current }) {
  return (
    <div className="text-center mt-10 mb-8 ">
      <h1 className="text-center text-blue-950 text-4xl font-semibold">
        {data[current] && data[current].title}
      </h1>
      <p className="text-center text-zinc-400 text-lg font-light">
        {data[current] && data[current].description}
      </p>
    </div>
  );
}
