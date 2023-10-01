export function ContactUs() {
  return (
    <>
      <div class="bg-[url('/images/horse.jpg')] p-10 bg-no-repeat bg-cover w-full m-auto dark:bg-black text-center  justify-center flex flex-col lg:m-auto align-middle">
        <h1 class="lg:p-4 lg:m-auto lg:text-3xl lg:w-1/4 p-6 font-zen  rounded-full bg-no-repeat bg-white bg-gradient-to-tr m-auto from-yellow-500  via-red-800 to-yellow-500  text-white mt-3  ">
          Contact Us!
        </h1>
        <h2 class="text-white bg-amber-700 m-auto p-4 bg-opacity-30 mt-10 mb-10 w-3/4 bg-center text-center   rounded-lg">
          {" "}
          We'd love to hear from you.
        </h2>
        <button class="lg:p-6 mt-2 lg:m-auto lg:text-3xl lg:w-1/2 w-2/3 m-auto rounded-full bg-gradient-to-tr  from-yellow-500   via-red-800  to-yellow-500 p-4 text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800">
          <a class="mt-3" href="mailto:warportalonline@gmail.com">
            Click Here to Email Us!
          </a>
        </button>
      </div>
    </>
  );
}
