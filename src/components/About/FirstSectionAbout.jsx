const FirstSectionAbout = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-14 lg:pl-[135px] pl-4">
      <div className="grid lg:gap-10 gap-4">
        <h1 className="lg:text-[54px] text-3xl font-semibold tracking-[6%] capitalize">
          our story
        </h1>
        <div className="grid lg:gap-6 gap-3 lg:text-md font-secondary">
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1605235744170-f95566b5964e?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default FirstSectionAbout;