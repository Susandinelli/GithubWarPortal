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
      <div class="flex font-zen text-center justify-center flex-col">
        <div class="w-1/2 m-auto  mb-4 text-center bg-gradient-to-r  from-yellow-500 via-red-800 p-2 to-yellow-500   rounded-full ">
          <h1 class="m-auto text-center text-red-800 p-4 dark:bg-black   rounded-full bg-white">
            Sign Up For Our Newsletter
          </h1>{" "}
        </div>
        <form onSubmit={NewsletterSignUp} class="flex-col flex w-2/3 m-auto">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            class="text-center mb-4"
          />
          <input
            type="submit"
            class="mb-2 rounded-full bg-gradient-to-tr w-1/4 m-auto from-yellow-500   via-red-800  to-yellow-500 p-1 text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800"
          />
        </form>
      </div>
    </>
  );
}
