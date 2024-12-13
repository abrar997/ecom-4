import bk from "../../assets/icons/bkash.svg";
import visa from "../../assets/icons/visa.svg";
import master from "../../assets/icons/master.svg";
import bangali from "../../assets/icons/bangali.svg";

const PaymentMethods = () => {
  return (
    <div>
      <div className="grid gap-8">
        <div className="flex justify-between items-center text-md font-secondary">
          <div className="flex gap-4">
            <input type="radio" name="" id="" className="w-6 h-6" />
            <label htmlFor="">Bank</label>
          </div>
          <div className="flex gap-2 items-center">
            <button>
              <img src={bk} alt="" />
            </button>
            <button>
              <img src={visa} alt="" />
            </button>
            <button>
              <img src={master} alt="" />
            </button>
            <button>
              <img src={bangali} alt="" />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <input type="radio" name="" id="" className="w-6 h-6" />
          <label htmlFor="">Cash on delivery</label>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethods;
