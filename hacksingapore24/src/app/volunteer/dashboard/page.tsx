import Image from "next/image";
import PlantGrid from "@/components/ui/plantGrid";

export default function volunteerDashboardPage() {
    return(
        <main className="flex min-h-screen flex-col justify-between p-10 align-top">
            <div className="sticky flex flex-row w-full top-40">
                <div className="flex flex-col w-[65%] bg-hack-100 rounded-xl l-0">
                    <PlantGrid />
                    <Image src="/tree.webp" alt="A tree" width={200} height={200} />
                </div>
                <div className="flex flex-col space-y-10 justify-center w-[35%] r-0 t-0">
                    <p className="font-bold text-5xl text-hack-400 text-center w-full">Points and Metrics</p>
                    <div className="flex flex-col bg-hack-300 rounded-xl">

                    </div>
                </div>
            </div>
        </main>
    )
}