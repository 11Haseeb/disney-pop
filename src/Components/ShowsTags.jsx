import React, { useEffect, useState } from "react";

export default function ShowsTags(props) {
  const { customStyle1, customStyle2 } = props;

  const [tags, setTags] = useState([]);

  const disneyTags = [
    "Disney",
    "Cartoons",
    "Animation",
    "Movies",
    "TV Shows",
    "Characters",
    "Disneyland",
    "Disney World",
    "Magic Kingdom",
    "Pixar",
    "Marvel",
    "Star Wars",
    "Princesses",
    "Villains",
    "Music",
    "Merchandise",
    "Theme Parks",
    "Classics",
    "Modern",
    "Fantasy",
  ];

  useEffect(() => {
    setTags(disneyTags);
  }, []);

  return (
    <div>
      <h3 className="py-3 t-text-2xl">Tags</h3>
      <ul className="t-flex t-flex-wrap t-gap-[0.5rem] t-bg-zinc-100 p-2" style={customStyle1}>
        {tags.map((tag, index) => {
          return (
            <div key={index}>
              <li className="py-1 px-2 t-text-[0.8rem]" style={customStyle2}>{tag}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
