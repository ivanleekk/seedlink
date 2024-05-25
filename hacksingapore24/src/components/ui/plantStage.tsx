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
            <div className="rounded-xl bg-hack-400 justify-center w-36 h-12 object-center ml-2">
                <p className="font-bold text-lg text-center text-white">LEAVES</p>
            </div>
        </div>
    )
}