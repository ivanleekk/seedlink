import Image from "next/image";

export default function SaveArrow() {
    return(
        <div className="flex flex-col">
            <Image src="/volunteer/saveArrow.webp" alt="Save arrow" width={300} height={300}/>
            <p className="m-1 font-bold text-xl text-right">Save it! :)</p>
        </div>
    )
}