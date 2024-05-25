import Image from "next/image";
import IntroText from "@/components/IntroText";
import PromoImages from "@/components/ui/PromoImages";
import Contacts from "@/components/ui/contacts";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 mt-20">
        <div className={`flex flex-row space-x-8`}>
            <div className={`flex flex-col justify-center`}>
                <IntroText/>
                <Contacts/>
            </div>
            <div className={`flex flex-col justify-center space-y-2`}>
                <PromoImages/>
                {/*Change to link once next page done*/}
                <div className="flex min-w-max justify-center">
                    <a href={'/signup'}>
                        <Button>JOIN NOW</Button>
                    </a>
                </div>
            </div>
            </div>
    </main>
);
}
