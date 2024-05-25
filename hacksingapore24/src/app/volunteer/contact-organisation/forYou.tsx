import ForYouCard from "@/app/volunteer/bulletin-board/forYouCard";

export default function ForYou() {
    return (
        <div className={'flex-col bg-hack-200 rounded-3xl p-10 w-1/3'}>
            <h1 className={'text-3xl'}>For You</h1>
            <br/>
            <ForYouCard/>
        </div>
    )
}