import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  const [pin, setPin] = useState(["", "", "", ""]);

  const handlePinChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with PIN:", pin.join(""));
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{
        backgroundImage: 'url(/Login.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Head>
        <title>Ruby Belly & Lechon - Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
        <div className="bg-red-800 text-white rounded-2xl shadow-2xl border-2 border-black flex w-full max-w-4xl h-[30rem] relative">
          
          {/* Left Section: Welcome and PIN Entry */}
          <div className="bg-red-700 w-1/3 h-3/4 rounded-2xl shadow-md p-10 m-10">
            <div className="py-2">
              <h1 className="text-4xl font-bold text-white mb-2">Welcome!</h1>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num, idx) => (
                    <button
                      key={idx}
                      className="bg-gray-300 text-black text-2xl p-4 rounded-md"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Signup Form */}
          <div className="bg-red-600 w-1/2 h-full p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Sign up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 rounded-lg text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg text-black"
              />
              <input
                type="password"
                placeholder="Mobile PIN"
                className="w-full p-3 rounded-lg text-black"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Vector Icon (Profile Icon) */}
          <div className="absolute top-4 left-4 p-2 bg-transparent hover:bg-gray-800 rounded">
            <Link href="/profile">
              <Image
                src="/Vector.png"
                alt="Profile Icon"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
