import Link from "next/link"
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-[#452542]">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-[#452542] text-white space-y-5">
          <h1 className=" text-5xl font-bold ">Welcome to FileSharer <br />
            Storing everything for you and your business needs. All in one place. 
          </h1>
          <p className="pb-20">Get the storage you and your teams need with security features like file recovery, password protection, watermarking, and viewer history.</p>
          <div>
            <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit">Try it for Free
              <ArrowRight className="ml-10" />
            </Link>
          </div>
        </div>
        <div className="h-full p-10">
            <video autoPlay loop muted className="rounded-lg">
              <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4" />
            </video>
          </div>
      </div>

      

      <div>
        <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
        <p className="text-center font-light p-5">For learning only</p>
      </div>
    </main>
  );
}
