import { useState } from "react";
import "./index.css";

export default function CardValidator() {
  const [userInput, setUserInput] = useState({
    userId: "",
    characterId: "",
  });

  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  const [responseData, setResponseData] = useState([]);

  const handleSubmit = async (event, req, res) => {
    event.preventDefault();
    console.log("clicked submit");
    try {
      const check = await fetch("http://localhost:5000/CardValidator", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userInput.userId,
          characterId: userInput.characterId,
        }),
      });
      console.log("Post request succeeded");
      const data = await check.json();
      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div class=" bg-[url('/images/scene.jpg')] bg-cover pt-6 text-red-800 dark:text-amber-400 lg:justify-center lg:align-middle   flex items-center justify-center  text-center text-xl ">
        <form onSubmit={handleSubmit} class="dark:text-amber-400  flex justify-center flex-col w-5/6">
          <header class="  flex justify-center">
            {" "}
            <h1 class="lg:p-4 lg:m-6 lg:text-3xl lg:w-1/4 mt-2 mb-2 flex w-2/3 justify-center rounded-full  bg-white bg-gradient-to-tr from-yellow-500  via-red-800 to-yellow-500 p-2 font-zen text-center align-middle text-white ">
              Card Validator
            </h1>
          </header>
          <div class="lg:flex lg:flex-col">
            <section class="lg:mr-2 lg:mt-8 lg:text-3xl lg:align-middle lg:justify-center flex justify-center mt-6">
              <label for="User Id">
                {" "}
                <h2 class="font-zen lg:m-4 lg:flex lg:p-6 flex-col mt-2  rounded-full bg-gradient-to-tl from-yellow-500  via-red-800   to-yellow-500 p-2 text-white  hover:to-yellow-500">
                  User ID
                </h2>
              </label>
            </section>
            <section class=" lg:flex lg:justify-center   mt-2  rounded-full  bg-gradient-to-tl   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
              <input
                class="flex justify-center dark:bg-black w-full rounded-full bg-white p-2 lg:p-10 text-center placeholder-red-800 dark:placeholder-amber-400"
                type="text"
                name="userId"
                placeholder="Enter Here"
                value={userInput.userId}
                onChange={handleChange}
                required
              ></input>
            </section>

            <section class="mt-6 lg:mr-2 lg:ml-2 lg:mt-8 lg:text-3xl lg:align-middle lg:justify-center flex justify-center">
              <label for="User Id">
                {" "}
                <h2 class="font-zen lg:flex lg:p-3 flex-col mt-2  rounded-full bg-gradient-to-tl from-yellow-500  via-red-800  lg:m-4 to-yellow-500 p-2 text-white  hover:to-yellow-500">
                  Card ID
                </h2>
              </label>
            </section>
            <section class="lg:mt-4    mt-2  rounded-full  bg-gradient-to-tl   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
              <input
                class="dark:bg-black  w-full rounded-full bg-white p-2 lg:p-10 text-center placeholder-red-800 dark:placeholder-amber-400"
                type="text"
                name="characterId"
                placeholder="Enter Here"
                value={userInput.characterId}
                onChange={handleChange}
                required
              ></input>
            </section>
          </div>{" "}
          <div class="lg:flex-wrap lg:flex-row mt-6">
            <section class="">
              <label for="Submit Button">
                <input
                  type="submit"
                  class="lg:p-4 m-auto lg:m-auto lg:text-center mt-2 lg:text-3xl lg:w-1/3 w-2/5 rounded-full bg-gradient-to-tr  from-yellow-500   via-red-800  to-yellow-500 p-4 font-zen text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800 flex justify-center"
                ></input>
              </label>
              <label for="Result">
                <h3 class="lg:text-3xl text-white m-auto mt-10 bg-amber-700 rounded-full w-1/3 lg:p-2 lg:w-1/5">
                  Card is:
                </h3>
              </label>
              <div class="flex mt-2 justify-center">
                {" "}
                <p class="lg:text-3xl flex lg:w-1/6 justify-center   mt-2 mb-2 w-full rounded-full  bg-gradient-to-tr  from-yellow-500   via-red-800 to-yellow-500 p-1 text-center align-middle text-white ">
                  {" "}
                  {responseData}
                </p>
              </div>
            </section>
          </div>
        </form>
      </div>
    </>
  );
}
