import React from "react";

type Props = {
  topText: string;
  bottomText: string;
  onTopTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBottomTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  memeGenerate: () => void;
};

const MemeForm = (props: Props) => {
  return (
    <form>
      <div className="flex gap-8">
        <input
          type="text"
          placeholder="Top Text"
          onChange={props.onTopTextChange}
          value={props.topText}
          className="w-full p-3 rounded border-solid border-2 border-gray-400"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          onChange={props.onBottomTextChange}
          value={props.bottomText}
          className="w-full p-3 rounded border-solid border-2 border-gray-400"
        />
      </div>
      <button
        onClick={props.memeGenerate}
        className="w-full bg-gradient-to-r from-violet-dark to-violet-light text-white mt-5 p-4 text-xl font-semibold rounded-md"
        type="button"
      >
        Get a new meme image
      </button>
    </form>
  );
};

export { MemeForm };
