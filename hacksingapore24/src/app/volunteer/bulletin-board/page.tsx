import ForYou from "@/app/volunteer/bulletin-board/forYou";
import {BulletinBoard} from "@/app/volunteer/bulletin-board/bulletinBoard";

export default function Page() {
    return (
        <main className="flex flex-col justify-between h-screen items-center ">
        {/*    table on the left with 7 columns and one column on the right*/}
            <div className={"flex flex-row mx-auto px-8 gap-12"}>
                <BulletinBoard/>
                <ForYou/>
            </div>
        </main>
    );
}