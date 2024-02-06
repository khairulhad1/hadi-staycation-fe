import InputText from "../../../src/elements/InputText/index";

export default function BookingInformation(props) {
  const { data, itemDetails, checkout } = props;
  if (!itemDetails) {
    return null;
  }

  return (
    <div className="flex container mx-auto px-6 justify-center items-center lg:pr-[110px]">
      <div className="flex flex-wrap justify-between items-center lg:w-[1000px] lg:h-[432px] ">
        <div className="">
          <div className="">
            <figure className="mb-6">
              <img
                src={`${import.meta.env.VITE_BASE_API_URL}/${
                  itemDetails.imageId[0].imageUrl
                }`}
                alt={itemDetails.title}
                className="w-[420px] h-[270px]"
              />
            </figure>
            <div className="flex items-center justify-between mt-2">
              <div className="">
                <h5 className="">{itemDetails.title}</h5>
                <span className="">
                  {itemDetails.city}, {itemDetails.country}
                </span>
              </div>
              <div className="">
                <span className="">
                  ${+checkout.duration * itemDetails.price} USD
                  <span className="text-gray-500"> per </span>
                  {checkout.duration} {itemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:border-r-2 lg:border-slate-500 lg:h-full"></div>
        <div className="mb-6 mt-10">
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={props.onChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={props.onChange}
          />
          <label htmlFor="email">Email Adress</label>
          <InputText
            id="email"
            name="email"
            type={`email`}
            value={data.email}
            onChange={props.onChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <InputText
            id="phone"
            name="phone"
            type={`tel`}
            value={data.phone}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
}
