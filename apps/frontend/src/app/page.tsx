import { BigLogo } from "@/components/template/BigLogo";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
        h-screen flex flex-col justify-center items-center gap-10
        bg-[url('/background-elementos.svg')] bg-cover 
      "
    >
      <div className="flex flex-col items-center gap-4">
        <BigLogo />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Create and manage your event invitation quickly and easily,
          without complications
        </p>
      </div>
      <Link
        href={`/event`}
        className="button blue text-lg uppercase"
      >
        Create your event
      </Link>
    </div>
  );
}
