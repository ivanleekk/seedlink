import Image from "next/image";
import IntroText from "@/components/IntroText";
import PromoImages from "@/components/ui/PromoImages";
import Contacts from "@/components/ui/contacts";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col justify-between p-24 align-middle">
          <div className={`flex fixed flex-row left-[2.5%] max-w-[45%] align-middle`}>
              <div className={`flex flex-col justify-center`}>
                  <IntroText/>
                  <Contacts/>
              </div>
          </div>
          <div className={`fixed flex flex-col justify-center space-y-2 right-0 min-h-max max-w-[50%] align-middle`}>
              <PromoImages/>
              {/*Change to link once next page done*/}
              <div className="flex min-w-max justify-center">
                  <a href={'/signup'}>
                      <Button className="xl text-lg">JOIN NOW</Button>
                  </a>
              </div>
          </div>
      </main>
  );
}
