import Image from "next/image";

export default function NoThanksArrow() {
    return(
        <div className="flex flex-col">
            <p className="m-1 font-bold text-xl">Not interested :(</p>
            <Image src="/volunteer/noThanksArrow.webp" alt="No thanks arrow" width={300} height={300} />
        </div>
    )
}