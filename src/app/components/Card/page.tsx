"use client";
import React, { useState } from "react";
import Cardlist from "./Cardlist";

const page = () => {
  const [cards, setCards] = useState([
    {
      id: "4bef3888-8fdf-4a59-a433-3e6ab7d78322",
      name: "Sarine Tarbatt",
      bio: "Barium swallow",
      profession: "Human Resources Manager",
      profile: "http://dummyimage.com/227x100.png/cc0000/ffffff",
    },
    {
      id: "0329be1d-ecaa-44ff-97dd-be097e1c6f28",
      name: "Link Hartle",
      bio: "2ndry ocular imp insert",
      profession: "Physical Therapy Assistant",
      profile: "http://dummyimage.com/125x100.png/dddddd/000000",
    },
    {
      id: "1dab38ea-4370-4ee0-ac73-bf26aaed2335",
      name: "Gael Slorach",
      bio: "Conjunctivorhinos w tube",
      profession: "Structural Engineer",
      profile: "http://dummyimage.com/243x100.png/ff4444/ffffff",
    },
    {
      id: "01e54db1-0348-4757-8be6-c6881a396068",
      name: "Beverlie McElhargy",
      bio: "Rhinoplasty NEC",
      profession: "Executive Secretary",
      profile: "http://dummyimage.com/182x100.png/cc0000/ffffff",
    },
    {
      id: "f3024b8f-2854-4d19-afd6-75685cf17350",
      name: "Sean Disdel",
      bio: "Open biliary tract bx",
      profession: "Software Engineer II",
      profile: "http://dummyimage.com/241x100.png/ff4444/ffffff",
    },
  ]);

  return <Cardlist cards={cards} />;
};

export default page;
