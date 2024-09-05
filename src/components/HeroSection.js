import React from "react";
import CardComponent from "./CardComponent";


const HeroSection = () => {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  return (
    <>
      <section className="text-center py-20 px-6 bg-fixed ">
        <h1 className="text-5xl font-bold mb-20 text-">Introducing NeoChat</h1>
        <p className="mb-12 text-xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
          {formattedDate}
        </p>

        <div className="flex justify-center space-x-4 mb-20">
        <button className="bg-purple-300 rounded-xl border-2 border-dashed border-black bg-white px-8 py-3 font-semibold uppercase text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_black] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 active:translate-x-0 active:translate-y-0 active:shadow-none active:bg-gradient-to-r active:from-purple-600 active:to-blue-600">
    Try NeoChat
</button>


            
          
        </div>
        <p className="text-2xl font-serif  mb-20 mx-auto text-center max-w-3xl px-4" style={{ fontFamily: 'Georgia, serif' }}>
  Free to use. Easy to try. Just ask and NeoChat can help with writing, learning, brainstorming, and more.
 
</p>

      </section>
      <div className="bg-custom-gradient text-white min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Three Cards in a Row */}
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      
      {/* You can place other components like TwoCardComponent and Social below */}
      <div className="mt-1">
        
        {/* <Social /> */}
      </div>
    </div>
    </>
  );
};

export default HeroSection;
