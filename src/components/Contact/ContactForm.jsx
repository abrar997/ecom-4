import Button from "../reusable/Button";

const ContactForm = () => {
  return (
    <div className="col-span-2 shadow-contactBox lg:py-10 lg:px-[35px] flex flex-col lg:gap-8 gap-6">
      <div className="grid lg:grid-cols-3 gap-4">
        <input
          type="text"
          className="lg:px-4 px-2 py-[13px] bg-secondary2 rounded"
          placeholder="your Name"
        />
        <input
          type="text"
          className="lg:px-4 px-2 py-[13px] bg-secondary2 rounded"
          placeholder="your Email"
        />
        <input
          type="text"
          className="lg:px-4 px-2 py-[13px] bg-secondary2 rounded"
          placeholder="your Phone"
        />
      </div>
      <textarea
        rows={4}
        className="lg:px-4 px-2 py-[13px] bg-secondary2 rounded w-full h-full"
        placeholder="Your Message"
      ></textarea>
      <div className="ml-auto">
        <Button text="send message" />
      </div>
    </div>
  );
};

export default ContactForm;
