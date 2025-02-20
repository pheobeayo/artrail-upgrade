const Chat = () => {
    return (
      <main className="bg-[#231D16] w-screen min-h-screen flex flex-col items-center py-8">
        <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto p-4 md:p-6 lg:p-8">
          
          <section className="flex flex-col lg:flex-row gap-6">
           
            <div className="bg-[#2D2821] lg:w-[40%] w-full border rounded-lg p-4">
              <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl capitalize font-serif">
                Zariah Store
              </h3>
              {[
                { sender: "All New Rush", time: "Sun", message: "Hello, I chatted you up because I want to purchase." },
                { sender: "All New Rush", time: "Sun", message: "Hello, I chatted you up because I want to purchase." },
                { sender: "All New Rush", time: "Sun", message: "Hello, I chatted you up because I want to purchase." },
              ].map((chat, index) => (
                <div key={index} className="mt-4 border-b border-white/30 pb-2">
                  <p className="flex justify-between text-white font-semibold font-serif">
                    {chat.sender} <span>{chat.time}</span>
                  </p>
                  <p className="text-white text-sm md:text-base lg:text-lg font-light font-serif mt-2">
                    {chat.message}
                  </p>
                </div>
              ))}
            </div>
  
          
            <div className="lg:w-[60%] md:w-[60%] w-full bg-[#231D16]/90 border rounded-lg p-4">
              <div className="p-4 rounded-lg bg-[#2D2821]">
                <p className="text-white font-bold text-lg md:text-xl lg:text-2xl font-serif border-b border-white/30 pb-2">
                  All New Rush
                </p>
                <p className="text-white text-sm md:text-base lg:text-lg font-serif mt-4">
                  Hey, I messaged you because of the report you posted recently.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  };
  
  export default Chat;
  