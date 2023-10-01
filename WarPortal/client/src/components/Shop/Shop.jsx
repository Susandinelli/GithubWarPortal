import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <div class="bg-[url('/images/valor.jpg')] bg-bottom w-full bg-cover bg-opacity-30 bg-no-repeat p-6 md:text-2xl font-zen text-lg  m-auto flex md:flex-row flex-col justify-center text-center h-80 bg-white  dark:bg-black ">
        <button class="flex justify-center m-auto  bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class="text-2xl dark:bg-black flex justify-center m-auto hover: text-red-900 p-2 rounded-full bg-white">
            {" "}
            <Link class="flex dark:text-amber-400 justify-center p-8 l" to="/Decks">
              Decks
            </Link>{" "}
          </span>
        </button>
        <button class="flex justify-center m-auto   bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class="text-2xl dark:bg-black flex justify-center m-auto hover: text-red-900 p-2 rounded-full bg-white">
            {" "}
            <Link class="dark:text-amber-400 flex justify-center p-8 l" to="/Cards">
              Cards
            </Link>{" "}
          </span>
        </button>
      </div>
    </>
  );
}
