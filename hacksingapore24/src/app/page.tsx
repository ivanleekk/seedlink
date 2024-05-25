import Image from "next/image";
import IntroText from "@/components/IntroText";
import PromoImages from "@/components/ui/PromoImages";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className={`flex flex-row`}>
        <IntroText />
          {/*<PromoImages />*/}
      </div>
    </main>
  );
}
