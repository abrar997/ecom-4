import { FormInputsFieldsCheckOut } from "../../assets/mockData";

const UserDataForm = () => {
  return (
    <div>
      <form action="" className="grid lg:gap-8 gap-4">
        {FormInputsFieldsCheckOut.map((item, index) => (
          <FormInputs input={item} key={index} />
        ))}
        <div className="flex gap-4">
          <input type="checkbox" name="" id="" />
          <span className="text-md font-secondary">
            Save this information for faster check-out next time
          </span>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;

const FormInputs = ({ input }) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={input.to} className="font-secondary text-md opacity-40">
        {input.label}
      </label>
      <input
        type="text"
        name={input.name}
        className="bg-secondary2 rounded border-none h-[50px]"
      />
    </div>
  );
};
