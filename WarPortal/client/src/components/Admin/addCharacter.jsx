import { useState } from "react";

export default function addCharacter() {
  const [userInput, setUserInput] = useState({
    name: "",
    imageUrl: "",
    description: "",
  });
  const onChange = (event) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [event.target.name]: event.target.value,
    }));
  };
  async function submitForm(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/addCharacter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userInput.name,
        imageUrl: userInput.imageUrl,
        description: userInput.description,
      }),
      
    });
    console.log(response)
  }
  return (
    <>
      <div>
        <h1 class="bg-gradient-to-tr p-8 rounded-full w-1/2 flex font-zen text-white text-xl justify-center m-auto from-red-800 to-red-800 via-amber-700">Add Characters!</h1>
        <form onSubmit={submitForm}>
          <h2 class="flex m-auto justify-center max-w-sm text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white da2/3g-black dark:text-amber-400">
            Name
          </h2>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={userInput.name}
            onChange={onChange}
            class="bg-white w-2/3 border-2 mt-4 border-red-800 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"

          />
           <h2 class="flex m-auto justify-center max-w-sm text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white da2/3g-black dark:text-amber-400">
            Image URL
          </h2>
          <input
            type="text"
            name="imageUrl"
            placeholder="image Url"
            value={userInput.imageUrl}
            onChange={onChange}
            class="bg-white w-2/3 border-2 mt-4 border-red-800 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"

          />
           <h2 class="mt-10 flex m-auto justify-center max-w-sm text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white bg-white da2/3g-black dark:text-amber-400">
            Description
          </h2>
          <textarea
            name="description"
            placeholder="description"
            value={userInput.description}
            onChange={onChange}
            class="border-2 mt-4 break-words overflow-y-auto overflow-x-none border-red-800 bg-white  mb-10 flex w-5/6  lg:w-2/3  p-4 justify-center m-auto word-wrap align-middle dark:bg-black text-red-900 dark:text-amber-400  text-center resize-y "
          contentEditable="true"
          />
          <input type="submit" value="Submit"  class="flex justify-center m-auto p-10 text-xl w-2/3 lg:w-1/4 font-zen mb-10  rounded-full bg-gradient-to-tr  from-yellow-500   via-red-800  to-yellow-500 text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800"
 />
        </form>
      </div>
    </>
  );
}
