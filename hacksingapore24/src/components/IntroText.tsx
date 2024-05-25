import { Open_Sans, Public_Sans } from "@next/font/google";

const open_Sans = Open_Sans({subsets:["latin"]});

export default function IntroText() {
    return(
        <div className="space-y-5">
            <h1 className={`${open_Sans.className} text-5xl font-bold`}>Intro Text</h1>
            <p className={`${open_Sans.className} text-xl text-justify`}>
                Want to volunteer but unsure where to find the right beneficiary for you? Sign up on SeedLink today! SeedLink provides a convenient platform to link you up with a variety of beneficiaries and organisations. Uncover your true calling today, and support a cause that you truly care about!
            </p>
        </div>
    )
}
