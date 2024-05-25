import Image from "next/image";
import JobProfile from "@/app/volunteer/jobProfile";
import NoThanksArrow from "@/app/volunteer/noThanksArrow";
import SaveArrow from "@/app/volunteer/saveArrow";

export default function VolunteerPage() {
    return(
        <main className="flex min-h-screen flex-col justify-between  align-middle min-w-max">
            <div className="flex fixed flex-col top-40 right-10 w-80 h-fit justify-center bg-hack-300">
                <p className="text-lg font-bold text-center text-white">MEMBERSHIP: SEED</p>
                <p className="text-lg font-bold text-center text-white">10 MORE LEAVES TO REACH SPROUT!</p>
            </div>
            <div className="flex flex-col justify-center w-full h-max fixed space-y-2 mx-auto top-40">
                <Image src="/seedlink.svg" alt="picture" width={200} height={150} className="justify-center mx-auto"/>
                <h1 className="justify-center min-w-max mx-auto text-2xl font-bold">~ SWIPE AWAY! ~</h1>
                <div className="flex flex-row justify-center h-max w-[100%] space-y-2 mx-auto items-center">
                    <NoThanksArrow />
                    <JobProfile />
                    <SaveArrow />
                </div>
            </div>
        </main>
    )
}