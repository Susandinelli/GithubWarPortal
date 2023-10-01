import { Link } from "react-router-dom";

export default function ApproveOrSubmit() {
  return (
    <>
 <div class="m-auto  w-full dark:bg-black    text-xl font-zen  flex md:flex-row flex-col justify-center text-center  ">
 <button class="m-2 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
 <span class=" dark:bg-black flex justify-center  hover: text-red-900 p-4 rounded-full bg-white">
            {" "}
            <Link class="dark:text-amber-500  flex justify-center p-6" to="/ApproveCards">
            Approve Cards
            </Link>{" "}
          </span>
        </button>
        <button class="m-2 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
        <span class=" dark:bg-black flex justify-center  hover: text-red-900 p-4 rounded-full bg-white">
            {" "}
            <Link class="dark:text-amber-500  flex justify-center p-6" to="/SubmitCards">
            Submit Cards
            </Link>{" "}
          </span>
        </button>
        <button class="m-2 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black flex justify-center  hover: text-red-900 p-4 rounded-full bg-white">
            {" "}
            <Link class="dark:text-amber-500  flex justify-center p-6" to="/AddCharacters">
            Add Characters 
            </Link>{" "}
          </span>
        </button>
        <button class="m-2 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
        <span class=" dark:bg-black flex justify-center  hover: text-red-900 p-4 rounded-full bg-white">
            {" "}
            <Link class="dark:text-amber-500  flex justify-center p-6" to="/ViewUsers">
            View Users
            </Link>{" "}
          </span>
        </button>
      </div>



    </>
  );
}
