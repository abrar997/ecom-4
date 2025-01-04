import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ProductsContext } from "../../context/context";

const SearchField = ({ className }) => {
  const { searchProduct, setSearchProduct, handleSearchProducts } =
    useContext(ProductsContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    handleSearchProducts();
  }, [searchProduct]);

  return (
    <div className={className}>
      <Button onClick={() => setIsOpen(true)}>
        <CiSearch />
      </Button>
      <Dialog open={isOpen} onClose={() => {}}>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto bg-[#8080803c]">
          <DialogPanel
            transition
            className="origin-left  fixed bottom-0 z-50 w-full rounded shadow-xl bg-secondary2 p-4 pb-8 transition duration-100 ease-in-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <button onClick={() => setIsOpen(false)}>
              <IoClose className="absolute right-2 top-2 text-xl" />
            </button>
            <div>
              <p className="text-xl mb-3 font-semibold">Search Your product</p>
            </div>
            <input
              type="text"
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
              className="outline-none border-none lg:bg-secondary2 text-black placeholder:font-light placeholder:text-xs p-2 rounded w-full"
              placeholder="What are you looking for?"
            />
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default SearchField;
