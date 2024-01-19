import complated from "../../../public/images/complated.jpg";

export default function Complated() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <img
          src={complated}
          alt="checkout payment completed"
          className="w-[362px] h-[330px]"
        />
        <p className="text-gray-500 text-center mt-4">
          We will inform you via email later once the transaction has been
          accepted
        </p>
      </div>
    </div>
  );
}
