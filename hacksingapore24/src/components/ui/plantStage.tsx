import Image from "next/image";
import {clsx} from "clsx";

export default function PlantStage(props: {complete:boolean, stage:number}) {
    const Stage = () => {
        switch (props.stage){
            case 1:
                return("seed")
            case 2:
                return("sprout")
            case 3:
                return("seedling")
            case 4:
                return("plant")
            case 5:
                return("tree")
            case 6:
                return("blossom")
            default:
                return null
        }
    }

    return(
        <div className="grid-cols-1 mx-auto">
            <div className={clsx("rounded-xl bg-hack-200 justify-center",
                {'hidden':!props.complete})}>
                <p className="font-bold text-lg text-center">Cleared!</p>
            </div>
            <div className="justify-center">
                <Image src={`/plantStages/${Stage()}.webp`} alt="Image" width = {160} height = {160}/>
            </div>
            <div className="justify-center">
                <Image src={`/plantStageNames/${Stage()}.webp`} alt="Image" width = {160} height = {60}/>
            </div>
            <div className="rounded-xl bg-hack-400 justify-center w-40 h-10 object-center">
                <p className="font-bold text-lg text-center text-white">LEAVES</p>
            </div>
        </div>
    )
}