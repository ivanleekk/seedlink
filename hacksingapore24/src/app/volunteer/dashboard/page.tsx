'use client';
import Image from "next/image";
import PlantGrid from "@/components/ui/plantGrid";
import {doc, getDoc, getFirestore, setDoc, updateDoc} from "@firebase/firestore";
import {app, auth} from "@/lib/firebase";
import {useEffect, useState} from "react";


export default function volunteerDashboardPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // get the stages of the plant from firebase
    const [stages, setStages] = useState({
        stage1: false,
        stage2: false,
        stage3: false,
        stage4: false,
        stage5: false,
        stage6: false,
    });

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            const db = getFirestore(app)

            setIsLoggedIn(!!user)
            // check type of user
            getDoc(doc(db, "users", auth.currentUser.uid))
                .then((document: any) => {
                    if (document.exists()) {
                        // console.log(stages)

                        setStages(document.data().Stages);
                        // console.log('hi')
                        console.log(document.data().Stages)
                        return document.data().Stages;

                    } else {
                        console.log("Document does not exist")
                        return null;
                    }

                })

        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);




    return(
        <main className="flex min-h-screen flex-col justify-between p-10 align-top">
            <div className="sticky flex flex-row w-full top-40">
                <div className="relative flex flex-col w-[65%] bg-hack-100 rounded-xl l-0 py-5">
                    <div className="flex flex-col justify-center mb-96">
                        <PlantGrid plantGrid={stages}/>
                    </div>
                    <div className="absolute l-0 bottom-0">
                        <Image src="/tree.webp" alt="A tree" width={200} height={200}/>
                    </div>
                    <div className="absolute right-5 bottom-5 w-[75%] space-y-5 mt-80">
                        <div className="flex flex-col w-full bg-hack-200 rounded-xl space-y-5 justify-center
                        right-5 py-3 px-5">
                            <p className="text-center text-xl font-bold">Leaves are awarded by number of hours clocked
                                :)</p>
                            <p className="text-center text-xl font-bold">2 hours = 1 leaf</p>
                            <p className="text-center text-xl font-bold">Use your leaves to redeem vouchers/prizes!</p>
                            <p className="text-center text-xl font-bold">*NOTE: Every month you will need to clock a
                                minimum
                                of 8 hours to upkeep your membership status. Your membership status will restart half
                                yearly.</p>
                        </div>
                        <div className="flex flex-col w-full bg-hack-200 rounded-xl space-y-5 justify-center
                        right-5 bottom-5 py-3 px-5">
                            <p className="text-center text-xl font-bold">YOUR CURRENT MEMBERSHIP STATUS: TREE</p>
                            <p className="text-center text-xl font-bold">12 MORE LEAVES TO THE LAST STAGE: BLOSSOM!</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-10 justify-center w-[35%] r-0 t-0 ml-5">
                    <p className="font-bold text-5xl text-hack-400 text-center w-full">Points and Metrics</p>
                    <div className="flex flex-col bg-hack-300 rounded-xl justify-center space-y-5 p-5">
                        <div className="flex py-5 bg-hack-200 rounded-xl">
                        <Image src="/placeholder_graphs/g1.webp" alt="placeholder 1" width={500} height={200}/>
                        </div>
                        <div className="flex py-5 bg-hack-200 rounded-xl">
                        <Image src="/placeholder_graphs/g2.webp" alt="placeholder 2" width={500} height={200}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}