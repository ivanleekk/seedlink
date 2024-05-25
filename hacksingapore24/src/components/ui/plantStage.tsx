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

    const noOfLeaves = () => {
        switch (props.stage){
            case 1:
                return("0-10")
            case 2:
                return("11-50")
            case 3:
                return("51-70")
            case 4:
                return("71-90")
            case 5:
                return("91-150")
            case 6:
                return(">150")
            default:
                return null
        }
    }

    return(
        <div className="grid-cols-1 mx-auto justify-center">
            <div className={clsx("rounded-xl justify-center w-36 ml-2",
                {'bg-hack-300':!props.complete},
                {'bg-hack-200':props.complete})}>
                <p className={clsx("font-bold text-lg text-center",
                    {'text-hack-300':!props.complete})}>Cleared!</p>
            </div>
            <div className="flex justify-center h-100 flex-grow">
                <Image src={`/plantStages/${Stage()}.webp`} alt="Image" width = {120} height = {160}/>
            </div>
            <div className="justify-center">
                <Image src={`/plantStageNames/${Stage()}.webp`} alt="Image" width = {160} height = {60}/>
            </div>
            <div className="rounded-xl bg-hack-400 justify-center w-36 h-16 object-center py-1 ml-2">
                <p className="text-center text-xl font-bold text-white">{noOfLeaves()}</p>
                <p className="font-bold text-lg text-center text-white">LEAVES</p>
            </div>
        </div>
    )
}