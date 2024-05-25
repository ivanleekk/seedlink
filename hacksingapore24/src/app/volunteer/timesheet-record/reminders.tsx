import RemindersCard from "@/app/volunteer/timesheet-record/remindersCard";


export default function Reminders() {
    return (
        <div className={'flex-col bg-hack-200 rounded-3xl p-10 w-1/3'}>
            <h1 className={'text-3xl'}>For You</h1>
            <br/>
            <RemindersCard/>
        </div>
    )
}