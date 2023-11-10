// "use client";
//import createLeaves from "../../../../backend/js/createLeaves";
import Link from "next/link";
import CreateLeavesForm from "~~/components/loyalty-harvest/CreateLeavesForm";

export default function Page() {
  return (
    <div className="min-h-screen flex">
      {/* Left green gradient */}
      <div className="w-1/5 bg-gradient-to-r from-green-200 to-secondary"></div>

      {/* Middle purple area */}
      <div className="w-3/5 bg-secondary">
        <div className="mt-[14vh] items-center justify-self-center flex flex-col w-full">
          <h1 className="font-mono justify-self-center p-10 text-2xl text-base-100 font-bold ">
            <Link href="/creator">Create Leaves</Link>
          </h1>
          <span className="font-mono px-10 text-base-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in aliquet turpis. Duis vehicula eros eget
            purus ultricies vulputate. Nunc vitae malesuada odio, eleifend facilisis orci. Cras vehicula luctus diam,
            vitae elementum purus laoreet sit amet. Vestibulum ac lectus posuere neque tincidunt tincidunt. Curabitur
            suscipit erat est, eu placerat mi blandit ut.
          </span>

          <CreateLeavesForm />
        </div>
      </div>

      {/* Right green gradient */}
      <div className="w-1/5 bg-gradient-to-r from-secondary to-green-200"></div>
    </div>
  );
}
