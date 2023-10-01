import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <>
    <div class="bg-[url('/images/red.png')] flex  bg-center bg-cover lg:h-80 bg-opacity-30 bg-no-repeat">
          <div class="m-auto  w-full  pl-22 p-6 md:text-2xl font-zen text-lg flex md:flex-row flex-col justify-center text-center  ">
          <button class="m-8 bg-gradient-to-r lg:m-2  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black dark:text-amber-400 flex justify-center  hover: text-red-900 p-4 rounded-full   bg-white">
            {" "}
            <Link class=" p-4" to="/StoreOwnerSignIn">
            Store Owners
            </Link>{" "}
          </span>
        </button>
        <button class="m-8 bg-gradient-to-r lg:m-2  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black dark:text-amber-400 flex justify-center  hover: text-red-900 p-4 lg:p-6 rounded-full   bg-white">
            {" "}
            <Link class="lg:p-6 p-4" to="/CreatorSignIn">
            Creators
            </Link>{" "}
          </span>
        </button>
      
        <button class="m-8 bg-gradient-to-r lg:m-2  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black dark:text-amber-400 flex justify-center  hover: text-red-900 p-4 rounded-full bg-white">
            {" "}
            <Link class=" p-4" to="/SignUp">
            Sign Up
            </Link>{" "}
          </span>
        </button>
        
        <button class="m-8 bg-gradient-to-r lg:m-2  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black dark:text-amber-400 flex justify-center  hover: text-red-900 p-4 rounded-full bg-white">
            {" "}
            <Link class=" p-4" to="/Newsletter">
            Sign Up for Newsletter
            </Link>{" "}
          </span>
        </button>
       
      </div>
      </div>
    </>
  );
}
