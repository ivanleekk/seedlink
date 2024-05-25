import Image from "next/image";

export default function JobProfile() {
    return(
        <div>
        <Image src="/volunteer/example_1.jpeg"
               alt="example volunteer pic" width={600} height={400}
               className="justify-center mx-auto"/>
            <p></p>
        </div>
    )
}