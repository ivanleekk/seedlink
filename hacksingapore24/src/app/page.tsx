import Image from "next/image";
import IntroText from "@/components/IntroText";
import PromoImages from "@/components/ui/PromoImages";
import Contacts from "@/components/ui/contacts";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col justify-between p-24 align-middle">
          <div className={`flex sticky top-40 flex-row align-middle space-x-5`}>
              <div className={`flex flex-col justify-center`}>
                  <IntroText/>
                  <Contacts/>
              </div>
              <div
                  className={`flex flex-col justify-center space-y-2 right-0 min-h-max max-w-[50%] align-middle`}>
                  <PromoImages/>
                  {/*Change to link once next page done*/}
                  <div className="flex min-w-max justify-center">
                      <a href={'/signup'}>
                          <Button className="xl text-lg">JOIN NOW</Button>
                      </a>
                  </div>
              </div>
          </div>
      </main>
  );
}
