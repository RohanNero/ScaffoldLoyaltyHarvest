// "use client";
import Link from "next/link";
import CreateClaimForm from "../../../components/loyalty-harvest/CreateClaimForm";

export default function Page() {
  return (
    <div className="min-h-screen flex">
      {/* Left green gradient */}
      <div className="w-1/5 bg-gradient-to-l from-green-300 to-secondary"></div>

      {/* Middle purple area */}
      <div className="w-3/5 bg-green-300">
        <div className="mt-[14vh] items-center justify-self-center flex flex-col w-full">
          <h1 className="font-mono justify-self-center p-10 text-2xl text-[#10B981] font-bold ">
            <Link href="/user">User</Link>
          </h1>
          <CreateClaimForm />
        </div>
      </div>

      {/* Right green gradient */}
      <div className="w-1/5 bg-gradient-to-l from-secondary to-green-300"></div>
    </div>
  );
}
