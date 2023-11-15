// "use client";
import Link from "next/link";
import CreateSignatureForm from "~~/components/loyalty-harvest/CreateSignatureForm";

export default function Page() {
  return (
    <div className="min-h-screen flex">
      {/* Left green gradient */}
      <div className="w-1/5 bg-gradient-to-l from-green-300 to-secondary"></div>

      {/* Middle purple area */}
      <div className="w-3/5 bg-green-300">
        <div className="mt-[14vh] items-center justify-self-center flex flex-col w-full">
          <h1 className="font-mono justify-self-center p-10 text-2xl text-[#10B981] font-bold ">
            <button className="border rounded px-8 py-3 hover:-translate-y-2 hover:shadow-lg text-secondary bg-base-100">
              <Link href="/user">User</Link>
            </button>
          </h1>
          <div className="font-mono text-[#10B981]">
            <span>
              This simple function allows you to create a signature containing the address you would like to receive the
              rewards to.
            </span>
          </div>
          <CreateSignatureForm />
        </div>
      </div>

      {/* Right green gradient */}
      <div className="w-1/5 bg-gradient-to-l from-secondary to-green-300"></div>
    </div>
  );
}
