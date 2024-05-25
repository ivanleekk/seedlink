import Image from "next/image";
import IntroText from "@/components/IntroText";
import PromoImages from "@/components/ui/PromoImages";
import Contacts from "@/components/ui/contacts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 mt-20">
      <div className={`flex flex-row`}>
        <div className={`flex flex-col justify-center`}>
          <IntroText />
            <Contacts />
        </div>
          {/*<PromoImages />*/}
      </div>
    </main>
  );
}
