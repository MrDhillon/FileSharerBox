import Image from "next/image"
import Link from "next/link"
import { UserButton, SignedOut, SignInButton} from "@clerk/nextjs";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-5">
            <div className="bg-[#0160FE] w-fit">
                <Image 
                    src="https://www.shareicon.net/data/128x128/2015/08/10/82855_dropbox_4096x4096.png"
                    alt="Logo"
                    className="invert"
                    height={50}
                    width={50}
                />
            </div>
            <h1 className="font-bold text-xl">Cloud FileSharer</h1>
        </Link>

        {/* {Theme Toggler} */}
        <div className="px-5 flex space-x-2 items-center">
            <UserButton afterSignOutUrl="/" />  

            <SignedOut>
                <SignInButton afterSignInUrl="/dashboard" mode="modal" />
            </SignedOut>
            
        </div>
    </header>
  )
}

export default Header