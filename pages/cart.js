import Head from "next/head";


export default function Cart() {
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
        <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
          <h1 className="text-4xl font-bold mb-6 text-orange-700">Cart</h1>
          <p className="text-lg text-gray-700 mb-4">
            This is your Order Cart. Customize it as needed.
          </p>
        </main>
      </div>
    </div>
  );
}
