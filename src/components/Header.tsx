import React from "react";
import TrollFace from "../assets/Troll Face.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-gradient-to-r from-violet-dark to-violet-light p-5 items-center">
      <div className="flex gap-3">
        <img src={TrollFace} alt="Troll Face" className="w-12"/>
        <p className="text-white font-semibold text-2xl">Meme Generator</p>
      </div>
    </header>
  );
};

export { Header };
