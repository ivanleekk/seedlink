'use client'
import Image from "next/image";
import { Input } from "@/components/ui/input"
import {Button, buttonVariants} from "@/components/ui/button"
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import {app, auth} from "@/lib/firebase";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import NavMenu from "@/components/navMenu";
import {doc, getDoc, getFirestore} from "@firebase/firestore";




export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState<string | null>("");
    const [menu, setMenu] = useState<JSX.Element>(<div/>);

    const router = useRouter();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            const db = getFirestore(app)

            setIsLoggedIn(!!user)
            // check type of user
            setUserType(getDoc(doc(db, "users", auth.currentUser.uid))
                .then((document: any) => {
                    if (document.exists()) {
                        setMenu(renderHamburgerMenu(document.data().Type.toString()))
                        console.log(menu)
                        return document.data().Type;

                    } else {
                        setMenu(<div/>)
                        return null;
                    }

                }))
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await auth.signOut().then(() => {
            router.push('/');
        })
    };

    const renderAuthButtons = () => {
        if (isLoggedIn) {
            return (
                <div className={'flex flex-row'}>
                    <div className={'mr-4 my-auto'}>
                        <Button className={buttonVariants({variant: "default"})} onClick={logout}>
                            <CiLogout/>
                            <span className={"w-1"}/>
                            Logout
                        </Button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={'flex flex-row'}>
                    <div className={'mr-4 my-auto'}>
                        <Link className={buttonVariants({variant: "outline"})} href={"/login"}>
                            <CiUser/>
                            <span className={"w-1"}/>
                            Login
                        </Link>

                    </div>
                    <div className={'mr-4 my-auto'}>
                        <Link className={buttonVariants({variant: "outline"})} href={"/signup"}>
                            <CiLogin/>
                            <span className={"w-1"}/>
                            Sign Up
                        </Link>
                    </div>
                </div>
            );
        }
    }

    // if user is logged in have a hamburger menu
    const renderHamburgerMenu = (userType: string) => {
        console.log(isLoggedIn)
        console.log(userType)
        if ( userType === 'organisation') {
            return <NavMenu type={'organisation'}/>
        } else if (userType === 'volunteer') {
            return <NavMenu type={'volunteer'}/>
        } else {
            return <div/>
        }
    }



    return (
        <header className="bg-hack-100 sticky z-30 top-0 px-7 h-120">

            <div className="flex flex-row px-4 py-4">
                {menu}
                <a className="mr-auto flex flex-row ml-4" href={'/'}>
                    <Image className="mr-4" src="/seedlink.webp" alt="HackSingapore 2024" width={200} height={100}/>
                    {/*<h1 className={`text-5xl font-bold text-gray-800 justify-end my-auto ${alegreya.className}`}>SeedLink</h1>*/}
                </a>


                <Input className="justify-end w-56 mr-4 bg-white my-auto" type={"search"} placeholder={"Search"}/>


                {renderAuthButtons()}


            </div>
        </header>
    );

}