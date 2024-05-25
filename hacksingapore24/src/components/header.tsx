import Image from "next/image";
import { Input } from "@/components/ui/input"
import {Button, buttonVariants} from "@/components/ui/button"
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Alegreya_SC } from "@next/font/google";

const alegreya = Alegreya_SC({subsets: ["latin"], weight: "700"});

export default function Header() {
    return (
        <header className="bg-hack-100 sticky z-30 top-0 px-7 h-120  ">

            <div className="flex flex-row px-4 py-4">
                <a className="mr-auto flex flex-row" href={'/'}>
                    <Image className="mr-4" src="/seedlink.svg" alt="HackSingapore 2024" width={100} height={100}/>
                    <h1 className={`text-5xl font-bold text-gray-800 justify-end my-auto ${alegreya.className}`}>SeedLink</h1>
                </a>


                <Input className="justify-end w-56 mr-4 bg-white my-auto" type={"search"} placeholder={"Search"}/>



                <div className={'mr-4 my-auto'}>

                    <Link className={buttonVariants({ variant: "outline" })} href={"/login"}>
                        <CiUser />
                        <span className={"w-1"}/>
                        Login
                    </Link>
                </div>


                <div className={"my-auto"}>
                    <Link className={buttonVariants({variant: "outline"})} href={"/signup"}>
                        <CiLogin/>
                        <span className={"w-1"}/>

                        Sign Up
                    </Link>
                </div>

            </div>
        </header>
    );
}