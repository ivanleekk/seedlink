import Image from "next/image";

export default function VolunteerPage() {
    return(
        <main className="flex min-h-screen flex-col justify-between p-24 align-middle min-w-max">
            <div className="flex fixed flex-col top-40 right-10 w-80 h-fit justify-center bg-hack-300">
                <p className="text-lg font-bold text-center text-white">MEMBERSHIP: SEED</p>
                <p className="text-lg font-bold text-center text-white">10 MORE LEAVES TO REACH SPROUT!</p>
            </div>
            <div className="flex flex-col justify-center h-max fixed w-[100%] space-y-2">
                <Image src="/seedlink.svg" alt="picture" width={200} height={150} className="justify-center mx-auto"/>
                <h1 className="justify-center min-w-max mx-auto text-2xl font-bold">~ SWIPE AWAY! ~</h1>
                <div className="flex flex-row justify-center h-max w-[100%] space-y-2">

                </div>
            </div>
        </main>
    )
}