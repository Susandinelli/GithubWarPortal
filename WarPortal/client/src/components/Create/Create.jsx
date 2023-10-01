import { Link } from "react-router-dom";
export default function Create() {
  return (
    <>
          <div class="bg-[url('/images/blue-red.jpg')]  bg-top-left lg:bg-center w-full bg-cover bg-opacity-30 bg-no-repeat  p-2 md:text-2xl font-zen text-lg  m-auto flex md:flex-row h-96 flex-col justify-center text-center  bg-white dark:bg-black gap-4 ">
          <button class="m-auto  md:mr-10 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black flex justify-center  hover: text-red-900 p-4 rounded-full bg-white">
            {" "}
            <Link class="dark:text-amber-500  flex justify-center p-2" to="/CreatorSignIn">
            Creators
            </Link>{" "}
          </span>
        </button>
        <button class="m-auto md:ml-10 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
        <span class=" dark:bg-black flex justify-center  hover: text-red-900 p-4 rounded-full bg-white">
            {" "}
            <Link class="dark:text-amber-500  flex justify-center p-2" to="/StoreOwnerSignIn">
            Store Owners
            </Link>{" "}
          </span>
        </button>



      </div>
    
    </>
  );
}
