import Image from "next/image";
import PlantStage from "@/components/ui/plantStage";

export default function PlantGrid() {
    return(
        <div className="flex flex-row justify-around mx-auto">
        <PlantStage complete={true} stage={1} />
        <PlantStage complete={true} stage={2} />
        <PlantStage complete={true} stage={3} />
        <PlantStage complete={true} stage={4} />
        <PlantStage complete={true} stage={5} />
        <PlantStage complete={false} stage={6} />
        </div>
    )
}