const suggestions = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-5/6">
        <h1 className="  text-center text-3xl font-bold font-sans bg-gradient-to-r from-white to-[#9d5ae3] inline-block text-transparent bg-clip-text mt-5">
          HAVE A SUGGESTION?
        </h1>
        <textarea
          placeholder="Send us a suggestion!"
          name="suggestions"
          id="suggestions"
          className=" font-sans resize-none cursor-text md:w-5/6 w-5/6  h-60 outline-none rounded-2xl bg-transparent border-[#9d5ae3] border-2 p-4 mt-8 text-white max-xl:w-5/6 max-xl:h-70"
        ></textarea>
        <br />
        <button className=" box-border mt-3 py-1 px-1 bg-[#9d5ae3] text-white w-40 h-14 rounded-full shadow-[0_0_1rem_0px_#9d5ae3] text-xl  outline-none border-none [text-shadow:_0px_0px_5px_rgb(0_0_0)] cursor-pointer hover:bg-[#7f3dbf] active:scale-95 transition duration-200 z-20">
          Send
        </button>
      </div>
    </>
  );
};

export default suggestions;
