import React from "react";
import Image from "next/image";
import girl from "../../../../public/images/girl5.jpg";

const Cardlist = (props: {
  cards: Array<{
    id: string;
    profile: string;
    name: string;
    bio: string;
    profession: string;
  }>;
}) => {
  const cards = props.cards;
  return (
    <div className="h-screen flex items-center justify-center bg-yellow-200 ">
      {cards.map((card) => (
        <div
          className="bg-white min-h-52 min-w-64 rounded-lg flex flex-col items-center justify-center"
          key={card.id}
        >
          <div className="">
            <Image
              className="rounded-full"
              src={card.profile}
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>

          <h1>{card.name}</h1>
          <p>{card.bio}</p>
          <p>{card.profession}</p>
        </div>
      ))}
    </div>
  );
};

export default Cardlist;
