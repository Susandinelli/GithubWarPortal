import { useEffect, useState } from "react";

export function StoryArcs() {
  const [characters, setCharacters] = useState([]);

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  function getCharacterDropDown(id) {
    setSelectedCharacter(id == selectedCharacter ? null : id);
  }

  async function getCharacters() {
    const response = await fetch("http://localhost:5000/CharacterStories");

    const data = await response.json();
    console.log(data);
    setCharacters(data);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const [creatures, setCreatures] = useState([]);
  const [selectedCreature, setSelectedCreature] = useState(null);
  function getCreatureDropDown(id) {
    setSelectedCreature(id == selectedCreature ? null : id);
  }

  async function getCreatures() {
    const response = await fetch("http://localhost:5000/CreatureStories");
    const data = await response.json();
    console.log(data);
    setCreatures(data);
  }

  useEffect(() => {
    getCreatures();
  }, []);

  return (
    <>
      <div class="pb-14 dark:bg-black bg-white  text-white dark:text-white flex justify-center flex-col m-auto text-center">
        {" "}
        {characters.map((data) => (
          <div key={data.id}>
            <p class="lg:p-4  w-2/3  mt-4 mb-4 lg:m-auto lg:text-3xl lg:w-1/4  font-zen  rounded-full bg-no-repeat bg-white bg-gradient-to-tr m-auto from-yellow-500  via-red-800 to-yellow-500 p-2  text-white lg:mt-10 lg:mb-10 ">
              {data.name}
            </p>
            <img src={data.imageUrl} class="m-auto w-2/3" />
            <button
              onClick={() => getCharacterDropDown(data.id)}
              class="bg-gradient-to-tr hover:from-red-800 p-4 rounded-full font-zen mt-4 hover:to-red-800 hover:via-amber-500 from-amber-500 to-amber-500 via-red-800"
            >
              Character Story
            </button>{" "}
            {selectedCharacter === data.id && (
              <p class="dark:text-amber-400 text-red-800 p-6">{data.characterDescription}</p>
            )}{" "}
          </div>
        ))}
      </div>

      <div class="bg-black text-white flex justify-center flex-col m-auto text-center">
        {" "}
        {creatures.map((data) => (
          <div key={data.id}>
            <p class="lg:p-4  w-2/3  mt-4 mb-4 lg:m-auto lg:text-3xl lg:w-1/4  font-zen  rounded-full bg-no-repeat bg-white bg-gradient-to-tr m-auto from-yellow-500  via-red-800 to-yellow-500 p-2  text-white lg:mt-10 lg:mb-10 ">
              {data.name}
            </p>
            <img src={data.imageUrl} class="m-auto w-2/3" />
            <button
              onClick={() => getCreatureDropDown(data.id)}
              class="bg-gradient-to-tr hover:from-red-800 p-4 rounded-full font-zen mt-4 hover:to-red-800 hover:via-amber-500 from-amber-500 to-amber-500 via-red-800"
            >
              Creature Story
            </button>{" "}
            {selectedCreature === data.id && (
              <p class="p-16">{data.characterDescription}</p>
            )}{" "}
          </div>
        ))}
      </div>
    </>
  );
}
