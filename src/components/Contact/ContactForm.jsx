import Button from "../reusable/Button";

const ContactForm = () => {
  return (
    <div className="col-span-2 shadow-contactBox py-10 px-[35px] flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          className="px-4 py-[13px] bg-secondary2 rounded"
          placeholder="your Name"
        />
        <input
          type="text"
          className="px-4 py-[13px] bg-secondary2 rounded"
          placeholder="your Email"
        />
        <input
          type="text"
          className="px-4 py-[13px] bg-secondary2 rounded"
          placeholder="your Phone"
        />
      </div>
      <textarea
        rows={4}
        className="px-4 py-[13px] bg-secondary2 rounded w-full h-full"
        placeholder="Your Message"
      ></textarea>
      <div className="ml-auto">
        <Button text="send message" />
      </div>
    </div>
  );
};

export default ContactForm;
