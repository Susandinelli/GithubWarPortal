import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  async function NewsletterSignUp() {
    try {
      await fetch("http://localhost:5000/NewsletterSignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
    } catch (error) {
      alert("already added");
    }
  }

  return (
    <>
      <div class="flex bg-white dark:bg-black text-xl font-zen text-center justify-center flex-col">
        <div class="lg:w-1/3 w-5/6 m-auto mt-10 mb-10 text-center bg-gradient-to-r  from-yellow-500 via-red-800 p-2 to-yellow-500   rounded-full ">
          <h1 class="m-auto text-center text-red-800 p-4 dark:bg-black  dark:text-amber-400 rounded-full bg-white">
            Sign Up For Our Newsletter
          </h1>{" "}
        </div>
        <form onSubmit={NewsletterSignUp} class="flex-col flex w-5/6 lg:w-2/3 m-auto">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            class="placeholder-red-800 dark:bg-black text-center border-red-800 border-2 p-2 text-red-900 dark:text-amber-400 dark:border-amber-400 dark:placeholder-amber-400 mb-10"
            placeholder="Enter Email Here..."
          />
          <input
            type="submit"
            class="rounded-full bg-gradient-to-tr lg:w-1/4 m-auto from-yellow-500   via-red-800  to-yellow-500 lg:p-1 p-4 w-2/3 text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800 mb-10 "
          />
        </form>
      </div>
    </>
  );
}
