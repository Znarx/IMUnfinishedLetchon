import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [pin, setPin] = useState(["", "", "", ""]);

  const handlePinChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with PIN:", pin.join(""));
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
        <title>Ruby Belly & Lechon - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
        <div className="bg-orange-900 text-white rounded-2xl shadow-2xl border-2 border-black flex justify-end items-center w-full max-w-4xl h-[30rem] relative">
          <div className="bg-orange-700 w-1/3 h-3/4 rounded-2xl shadow-md p-10 m-10">
            <div className="py-2">
              <h2 className="text-2xl font-bold text-white mb-2">Login</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center space-x-4 mb-6">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    type="password"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handlePinChange(e.target.value, index)}
                    className="w-12 h-12 text-center text-2xl bg-gray-200 text-black rounded"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="bg-white text-orange-700 font-semibold rounded-full px-4 py-2 hover:bg-orange-500 hover:text-white transition"
              >
                Log in
              </button>
              <div className="text-center mt-4">
                <Link href="/signup">
                  <button className="text-white underline">
                    Not a member? Sign up
                  </button>
                </Link>
              </div>
            </form>
          </div>

          {/* Positioning the vector button inside the box, upper-left of "Ruby" */}
          <div className="absolute top-4 left-4 p-2 bg-transparent hover:bg-gray-800 rounded">
            <Link href="/profile">
              <Image
                src="/Vector.png"
                alt="Profile"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="absolute left-1/4 top-0 transform -translate-x-1/2 px-12 mt-4">
            <h3 className="text-4xl font-bold mb-2">Ruby</h3>
            <h1 className="text-5xl font-bold mb-2">Belly </h1>
            <h1 className="text-5xl font-bold mb-3">& Lechon </h1>
            <div className="border-2 w-10 border-white inline-block mb-15"></div>
            <h1 className="text-2xl font-bold mb-10">& WELCOME! </h1>
            <p className="mb-2">New User?</p>
            <Link href="/Asignup">
              <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
