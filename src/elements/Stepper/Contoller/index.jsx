export default function Controller(props) {
  return (
    <section className="mx-auto">
      <div className="justify-center flex mt-10">
        <div className="flex flex-col gap-4 justify-center items-center">
          {props.children}
        </div>
      </div>
    </section>
  );
}
