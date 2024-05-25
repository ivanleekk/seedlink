import Image from "next/image";

export default function JobProfile() {
    return(
        <div className="flex flex-col space-y-2">
        <Image src="/volunteer/2-2.webp"
               alt="example volunteer pic" width={450} height={300}
               className="justify-center mx-auto"/>
            <p className="text-center font-bold">{`placeholder`}</p>
        </div>
    )
}