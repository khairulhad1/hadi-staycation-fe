import InputText from "../../../src/elements/InputText/index";

export default function BookingInformation(props) {
  const { data, itemDetails, checkout } = props;
  return (
    <div className="flex justify-center pr-[110px]">
      <div className="flex justify-between items-center w-[1000px] h-[432px] ">
        <div className="">
          <div className="">
            <figure className="">
              <img
                src={itemDetails.imageUrls[0].url}
                alt={itemDetails.name}
                className="w-[420px] h-[270px]"
              />
            </figure>
            <div className="flex items-center justify-between mt-2">
              <div className="">
                <h5 className="">{itemDetails.name}</h5>
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
        <div className="border-r-2 border-slate-500 h-full"></div>
        <div className="">
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
