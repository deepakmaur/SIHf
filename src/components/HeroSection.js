import React from "react";
import CardComponent from "./CardComponent";
import TwoCardComponent from "./TwoCardComponent";
import Social from "./SocialComponent";

const HeroSection = () => {
  return (
    <>
      <section className="text-center py-20 px-6 bg-fixed ">
        <h1 className="text-5xl font-bold mb-6">Introducing ChatGPT</h1>
        <p className="mb-6">November 30, 2022</p>
        <div className="flex justify-center space-x-4 mb-10">
          <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
            Try ChatGPT
          </button>
          
        </div>
        <p className="text-lg mb-8">
          Free to use. Easy to try. Just ask and ChatGPT can help with writing,
          learning, brainstorming, and more.
        </p>
      </section>
      <div className="bg-custom-gradient text-white min-h-screen ">
        <CardComponent />
        <TwoCardComponent />
        <Social />
      </div>
    </>
  );
};

export default HeroSection;
