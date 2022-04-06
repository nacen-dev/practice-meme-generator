import React, { useEffect, useState } from "react";
import { MemeForm } from "./MemeForm";
import { generateRandomNumber } from "../utils";
import { MemeImage } from "./MemeImage";

type Props = {};

type MemeData = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
  topText: string;
  bottomText: string;
};

const Meme = (props: Props) => {
  const [memesData, setMemesData] = useState<MemeData[]>([]);

  const [meme, setMeme] = useState<MemeData>({
    ...memesData[generateRandomNumber(0, memesData.length - 1)],
    topText: "",
    bottomText: "",
  });

  const memeGenerate = () => {
    console.log(memesData);
    setMeme((meme) => ({
      ...memesData[generateRandomNumber(0, memesData.length - 1)],
      topText: meme.topText,
      bottomText: meme.bottomText,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      console.log(response);
      const data = await response.json();
      const memes = await data.data.memes;
      console.log(memes);
      setMemesData(memes);
    };
    fetchData();
  }, []);

  useEffect(() => {
    memeGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memesData]);

  const onTopTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeme((meme) => ({
      ...meme,
      topText: event.target.value,
    }));
  };

  const onBottomTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeme((meme) => ({
      ...meme,
      bottomText: event.target.value,
    }));
  };

  return (
    <main className="py-12 px-[20%] flex flex-col gap-8">
      <MemeForm
        topText={meme.topText}
        bottomText={meme.bottomText}
        onBottomTextChange={onBottomTextChange}
        onTopTextChange={onTopTextChange}
        memeGenerate={memeGenerate}
      />
      <MemeImage
        name={meme.name}
        imageUrl={meme.url}
        topText={meme.topText}
        bottomText={meme.bottomText}
      />
    </main>
  );
};

export { Meme };
