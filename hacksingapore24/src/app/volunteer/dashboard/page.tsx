import Image from "next/image";
import PlantGrid from "@/components/ui/plantGrid";

export default function volunteerDashboardPage() {
    return(
        <main className="flex min-h-screen flex-col justify-between p-10 align-top">
            <div className="sticky flex flex-row w-full top-40">
                <div className="relative flex flex-col w-[65%] bg-hack-100 rounded-xl l-0 py-5">
                    <div className="flex flex-col justify-center mb-96">
                        <PlantGrid/>
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
                    <div className="flex flex-col bg-hack-300 rounded-xl justify-center">
                        <Image src="/placeholder_graphs/g1.webp" alt="placeholder 1" width={500} height={200}/>
                        <Image src="/placeholder_graphs/g2.webp" alt="placeholder 2" width={500} height={200}/>
                    </div>
                </div>
            </div>
        </main>
    )
}