const CardData = [
  {
    title: "Instant Replies",
    description:
      "Do your client message you for appointment booking? Our chat bot can handle that conversation for you.",
  },
  {
    title: "Appointment Booking Chatbot",
    description:
      "EDo your client message you for appointment booking? Our chat bot can handle that conversation for you.",
  },
];
const ProductCard = () => {
  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-2 w-full">
      {CardData.map((data) => (
        <div key={data.icon} className=" h-[320px] px-8 py-4">
          <div className="px-8 py-4 gap-4 border border-[#E1E4E5] rounded-md h-72 w-[616px]">
            <div className="gap-2 text-[#1E715D]">
              <h2 className="text-2xl">{data.title}</h2>
              <div className="bg-[#1E715D] h-1 w-full mt-5"></div>
            </div>
            <p>{data.description}</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
