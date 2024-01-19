import logoBca from "../../assets/images/bca.jpg";
import logoMandiri from "../../assets/images/mandiri.jpg";
import InputFile from "../../../src/elements/InputFile/index";
import InputText from "../../../src/elements/InputText/index";

export default function Payment(props) {
  const { data, itemDetails, checkout } = props;

  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  return (
    <div className="flex justify-center items-center ml-28 text-blue-950 ">
      <div className="">
        <div className="text-blue-950 text-base font-normal leading-7 mb-5">
          Transfer Pembayaran:
        </div>
        <div className="">
          <p>Tax: {tax}%</p>
          <p>Sub total: ${subTotal} USD</p>
          <p>Total: ${grandTotal} USD</p>
        </div>
        <div className="flex mt-4">
          <div className=" text-right mr-5">
            <img src={logoBca} alt="bank central asia" width="60" />
          </div>
          <div className="">
            <dl>
              <dd>Bank Central Asia</dd>
              <dd>2208 1996</dd>
              <dd>BuildWith Angga</dd>
            </dl>
          </div>
        </div>
        <div className="flex mt-4">
          <div className=" text-right mr-5">
            <img src={logoMandiri} alt="bank central asia" width="60" />
          </div>
          <div className="">
            <dl>
              <dd>Bank Mandiri</dd>
              <dd>2208 1996</dd>
              <dd>BuildWith Angga</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="border-r-2 border-slate-500 h-[432px] mx-[100px]"></div>
      <div className="mt-6">
        <div className="mt-3 mb-5">
          <label htmlFor="proofPayment">Upload Bukti Transfer:</label>
        </div>
        <InputFile
          accept="image/*"
          id="proofPayment"
          name="proofPayment"
          value={data.proofPayment}
          onChange={props.onChange}
        />

        <label htmlFor="bankName">Asal Bank</label>
        <InputText
          id="bankName"
          name="bankName"
          type="text"
          value={data.bankName}
          onChange={props.onChange}
        />

        <label htmlFor="bankHolder">Nama Pengirim</label>
        <InputText
          id="bankHolder"
          name="bankHolder"
          type="text"
          value={data.bankHolder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
