import React, { useState } from "react";

export default function ViewUsers() {
  // Email List
  const [openEmailList, setOpenEmailList] = useState(false);
  const [emailList, setEmailList] = useState([]);

  async function getEmailList() {
    const response = await fetch("http://localhost:5000/ViewEmailList");

    const data = await response.json();
    setEmailList(data);
  }

  // Creators
  const [openCreators, setOpenCreators] = useState(false);
  const [creators, setCreators] = useState([]);

  async function getCreators() {
    const response = await fetch("http://localhost:5000/ViewCreators");
    const data = await response.json();
    setCreators(data);
  }


  //Store Owners
  const [openStoreOwners, setOpenStoreOwners] = useState(false);
  const [storeOwners, setStoreOwners] = useState([]);

  async function getStoreOwners() {
    const response = await fetch("http://localhost:5000/ViewStoreOwners");
    const data = await response.json();
    setStoreOwners(data);
  }

  return (
    <>
      <div class="flex flex-col justify-center m-auto">
        <button
          onClick={() => {
            setOpenEmailList(!openEmailList);
            getEmailList();
          }} class="w-2/3 p-2 mt-4 m-auto font-zen text-white rounded-full bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500"
        >
           Email List
        </button>
        <div >
        {openEmailList ? (
          <div class="flex justify-center m-auto">
            {emailList.map((data) => (
              <div key={data.newsletterId}>
                <div  >
                <p>{data.email},</p></div>
              </div>
            ))}
          </div>
        ) : null}</div>
      </div>

      <div class="flex flex-col justify-center m-auto text-center">
        <button
          onClick={() => {
            setOpenCreators(!openCreators);
            getCreators();
          }} class="w-2/3 p-2 mt-4 m-auto  text-white rounded-full bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500 font-zen"
        >
           Creator List
        </button>
        {openCreators ? (
          <div >
            {creators.map((data) => (
              <div key={data.id} class="border-t-2 border-b-2 border-red-700 m-2">
                <p>{data.firstName}</p>
                <p>{data.lastName}</p>
                <p>{data.email}</p>
                <p>{data.isActive}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div class="flex flex-col justify-center m-auto text-center mb-8">
        <button
          onClick={() => {
            setOpenStoreOwners(!openStoreOwners);
            getStoreOwners();
          }} class="font-zen w-2/3 p-2 mt-4 m-auto  text-white rounded-full bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500"
        >
           Store Owner List
        </button>
        <div>
        {openStoreOwners ? (
          <div class="border-t-2 border-b-2 border-red-700 m-2">
            {storeOwners.map((data) => (
              <div key={data.id}>
                <p>{data.firstName}</p>
                <p>{data.lastName}</p>
                <p>{data.storeName}</p>
                <p>{data.storeAddress}</p>
                <p>{data.phone}</p>
                <p>{data.email}</p>
              </div>
            ))}
          </div>
        ) : null}</div>
      </div>
    </>
  );
}
