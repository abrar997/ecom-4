const ProductImages = ({ singleProduct }) => {
  return (
    <div className="lg:flex grid lg:gap-16 gap-7 lg:col-span-2">
      <div className="grid lg:grid-cols-1 grid-cols-2 gap-4 order-2">
        {singleProduct.productsImages &&
          singleProduct.productsImages.map((image, index) => (
            <button
              className="bg-secondary2 lg:w-[170px] h-[138px] flex items-center justify-center"
              key={index}
            >
              <img src={image.image} alt={`image-${index + 1}`} />
            </button>
          ))}
      </div>
      <div className="bg-secondary2 flex items-center justify-center w-full lg:order-2">
        <img src={singleProduct.image} />
      </div>
    </div>
  );
};

export default ProductImages;
