import { FiPhone } from "react-icons/fi";

const ContactDetails = () => {
  return (
    <div className="shadow-contactBox py-10 px-[35px] grid lg:col-span-1 gap-8 w-full">
      <div className="grid gap-8">
        <div className="flex gap-4 items-center">
          <span className="bg-secondary text-white text-xl rounded-full w-10 h-10 flex items-center justify-center">
            <FiPhone />
          </span>
          <h1 className="text-md font-medium font-secondary capitalize">
            call to us
          </h1>
        </div>
        <p className="text-sm font-secondary">
          We are available 24/7, 7 days a week.
        </p>
        <p className="text-sm font-secondary">Phone: +8801611112222</p>
      </div>
      <div className="h-[1px] w-full bg-black opacity-50" />
      <div className="grid gap-8">
        <div className="flex gap-4 items-center">
          <span className="bg-secondary text-white text-xl rounded-full w-10 h-10 flex items-center justify-center">
            <FiPhone />
          </span>
          <h1 className="text-md font-medium font-secondary capitalize">
            Write To US
          </h1>
        </div>
        <p className="text-sm font-secondary">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-sm font-secondary">Emails: customer@exclusive.com</p>
        <p className="text-sm font-secondary">Emails: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default ContactDetails;
