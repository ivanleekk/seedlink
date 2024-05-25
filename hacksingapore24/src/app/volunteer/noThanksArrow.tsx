'use client'

import Image from "next/image";

export default function NoThanksArrow() {
    function handleClick() {

    }
    return(
        <button onClick={handleClick} className="flex flex-col">
            <Image src="/volunteer/arrow.webp" alt="No thanks arrow" width={300} height={300} />
        </button>
    )
}