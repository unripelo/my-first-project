import React from "react";

const Content1Container = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center align-middle">
      <div className="w-2/3 h-5/6 border-4 border-black-400 bg-amber-100 rounded-xl flex-col p-10 space-y-10 flex items-center justify-center align-middle">
        <div
          className="bg-white border-4 rounded-lg
        flex size-90 items-center w-full text-xl overflow-y-scroll"
        >
          <p className="font-serif text-left px-8">{}</p>
        </div>
        <div className="bg-white p-4 rounded-lg absolute bottom-16 left-65 text-2xl border-4 w-45 items-center justify-center flex size-15">
          Heart
        </div>
        <div className="bg-white p-4 rounded-4xl absolute bottom-27 right-60 text-2xl border-4 w-70 items-center justify-center flex size-15">
          Comment
        </div>
      </div>
    </div>
  );
};

export default Content1Container;
