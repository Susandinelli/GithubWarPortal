import { useState } from "react";
import useDrivePicker from "react-google-drive-picker";

export default function Creator() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [userInput, setUserInput] = useState({
    cardName: "",
    moveOne: "",
    moveOneDescription: "",
    moveTwo: "",
    moveTwoDescription: "",
    moveThree: "",
    moveThreeDescription: "",
    moveFour: "",
    moveFourDescription: "",
    gmail: "",
    creatorId: "",
  });
  console.log(userInput);
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  console.log(userInput);

  const handleSubmit = async (event, req, res) => {
    event.preventDefault();
    try {
      const submit = fetch("http://localhost:5000/CreatorSubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cardName: userInput.cardName,
          moveOne: userInput.moveOne,
          moveOneDescription: userInput.moveOneDescription,
          moveTwo: userInput.moveTwo,
          moveTwoDescription: userInput.moveTwoDescription,
          moveThree: userInput.moveThree,
          moveThreeDescription: userInput.moveThreeDescription,
          moveFour: userInput.moveFour,
          moveFourDescription: userInput.moveFourDescription,
          gmail: userInput.gmail,
          creatorId: userInput.creatorId,
        }),
      });
      console.log(submit);
      alert("Thank you for your submission!");
    } catch (error) {
      console.error(error);
    }
  };

  const [openPicker, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
 VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
VITE_DEVELOPER_KEY = import.meta.env.VITE_DEVELOPER_KEY;
    openPicker({
      clientId: "VITE_CLIENT_ID",
      developerKey: "VITE_DEVELOPER_KEY",
      viewId: "DOCS",
      //TODO: token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
  };

  //Add frontend API's here
  return (
    <>
      <div class=" bg-white dark:bg-black text-center flex-col flex justify-center">
        <div class="m-4">
          <header class="lg:p-4 m-auto lg:text-3xl lg:w-1/2 max-w-md flex justify-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3">
            <h2>Create Your Own Card!</h2>
          </header>
          <button
            class="font-zen text-sm bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
            onClick={handleOpen}
          >
            How To Correctly Upload Image Files
          </button>
          {open ? (
            <div>
              <p>
                Please upload your pictures in the order you create them below
                in _ format!
              </p>
            </div>
          ) : (
            <div></div>
          )}
          <div>
            <button
              onClick={() => handleOpenPicker()}
              class="font-zen bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
            >
              Select Files
            </button>
          </div>
          <section>
            <form onSubmit={handleSubmit} class="flex flex-col gap-4 mt-4">
              <section class="flex flex-col justify-center">
                <label htmlFor="Character Name">
                  <h2 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                    Character Name
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="cardName"
                    placeholder="Enter Here"
                    value={userInput.cardName}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </section>

              <section class="flex flex-col justify-center">
                <div class="m-auto font-zen bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full w-1/3">
                  <h1 class="dark:text-amber-500 dark:bg-black m-auto hover: text-red-900 p-2 rounded-full bg-white">
                    Move 1
                  </h1>
                </div>

                <label htmlFor="Move Name 1">
                  <h2 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                    Move Name 1
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="moveOne"
                    placeholder="Enter Here"
                    value={userInput.moveOne}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <label htmlFor="Move 1 Description">
                  <h2 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                    Move 1 Description
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="moveOneDescription"
                    placeholder="Enter Here"
                    value={userInput.moveOneDescription}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </section>

              <section class="flex flex-col justify-center">
                <div class="m-auto font-zen bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full w-1/3">
                  <h1 class="dark:text-amber-500 dark:bg-black m-auto hover: text-red-900 p-2 rounded-full bg-white">
                    Move 2
                  </h1>
                </div>

                <label htmlFor="Move Name 2">
                  <h2 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                    Move Name 2
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="moveTwo"
                    placeholder="Enter Here"
                    value={userInput.moveTwo}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <label htmlFor="Move 2 Description">
                  <h2 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                    Move 2 Description
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="moveTwoDescription"
                    placeholder="Enter Here"
                    value={userInput.moveTwoDescription}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </section>

              <section class="flex flex-col justify-center">
                <div class="m-auto font-zen bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full w-1/3">
                  <h1 class="dark:text-amber-500 dark:bg-black m-auto hover: text-red-900 p-2 rounded-full bg-white">
                    Move 3
                  </h1>
                </div>

                <label htmlFor="Move Name 3">
                  <h2 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                    Move Name 3
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="moveThree"
                    placeholder="Enter Here"
                    value={userInput.moveThree}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <label htmlFor="Move 3 Description">
                  <h2 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                    Move 3 Description
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="moveThreeDescription"
                    placeholder="Enter Here"
                    value={userInput.moveThreeDescription}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </section>

              <section class="flex flex-col justify-center">
                <div class="m-auto font-zen bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full w-1/3">
                  <h1 class="dark:text-amber-500 dark:bg-black m-auto hover: text-red-900 p-2 rounded-full bg-white">
                    Move 4
                  </h1>
                </div>

                <label htmlFor="Move Name 4">
                  <h2 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                    Move Name 4
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="moveFour"
                    placeholder="Enter Here"
                    value={userInput.moveFour}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <label htmlFor="Move 4 Description">
                  <h2 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                    Move 4 Description
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="moveFourDescription"
                    placeholder="Enter Here"
                    value={userInput.moveFourDescription}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </section>
              <section class="flex flex-col justify-center">
                <label htmlFor="Gmail">
                  <h2 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                    Gmail
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="email"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    placeholder="Enter Here"
                    name="gmail"
                    value={userInput.gmail}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </section>
              <section>
                <label htmlFor="Creator ID">
                  <h2 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                    Creator ID
                  </h2>
                </label>
                <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                  <input
                    type="text"
                    class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                    name="creatorId"
                    placeholder="Enter Here"
                    value={userInput.creatorId}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </section>
              <input
                type="submit"
                value="Submit for Approval!"
                class="font-zen bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
              ></input>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
