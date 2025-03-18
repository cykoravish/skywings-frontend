const Cont1A=()=>{
    const box = [
        { number: "1000+", text: "Total placement" },
        { number: "1000+", text: "Active jobs" },
        { number: "100+", text: "Companies" },
        { number: "100000+", text: "Registered Users" },
      ];
    return(
        <>
        <div className="bg-[#f5f5f5] py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-screen-xl mx-auto">
          {box.map((items, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white shadow-md rounded-lg"
            >
              <p className="font-bold text-2xl text-[#647DE7]">
                {items.number}
              </p>
              <span>{items.text}</span>
            </div>
          ))}
        </div>

      </div>
        </>
    )
}
export default Cont1A