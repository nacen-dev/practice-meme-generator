import React from "react";

type Props = {
  imageUrl: string;
  name: string;
  topText: string;
  bottomText: string;
};

const MemeImage = (props: Props) => {
  return (
    <div className="w-full relative">
      <img className="w-full" src={props.imageUrl} alt={props.name} />
      <p className="uppercase font-oswald font-semibold absolute top-2 left-1/2 translate-x-[-50%] text-white text-3xl">
        {props.topText}
      </p>
      <p className="uppercase font-oswald font-semibold absolute bottom-2 left-1/2 translate-x-[-50%] text-white text-3xl">
        {props.bottomText}
      </p>
    </div>
  );
};

export { MemeImage };
