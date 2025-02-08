'use client'
import React from "react";

const HdbAngel = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Right Box */}
      <div className="w-1/2 flex flex-col items-center justify-center text-4xl font-bold">
        <p className="animate-pulse text-white text-left w-full pl-10">
          <span className="text-yellow-400">A</span>ngel is the best
        </p>
        <p className="animate-pulse text-white text-left w-full pl-10">
          <span className="text-yellow-400">N</span>igga
        </p>        
        <p className="animate-pulse text-white text-left w-full pl-10">
          <span className="text-yellow-400">J</span>osh
        </p>
        <p className="animate-pulse text-white text-left w-full pl-10">
          <span className="text-yellow-400">A</span>vihs
        </p>
        <p className="animate-pulse text-white text-left w-full pl-10">
          <span className="text-yellow-400">LI</span>thuium
        </p>
        <p className="animate-pulse text-white text-left w-full pl-10">
          <span className="text-yellow-400">K</span>Ar
        </p>
      </div>
      
      {/* Left Side Box - Cake with Candles */}
      <div className="w-1/2 flex flex-col items-center justify-center text-4xl font-bold">
        <textarea
          className="w-3/4 h-1/2 p-4 bg-gray-800 text-white border border-gray-500 rounded"
          defaultValue="21f47836-2760-4202-9b38-a1cd5bb3f208"
          readOnly
        />
        <button
          className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded"
          onClick={() => {
            navigator.clipboard.writeText("21f47836-2760-4202-9b38-a1cd5bb3f208");
            alert("keep this code safe with u g, u will need this soon 😈");
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default HdbAngel;