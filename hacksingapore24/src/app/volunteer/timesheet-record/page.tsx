import {TimesheetBoard} from "@/app/volunteer/timesheet-record/timesheetBoard";
import Reminders from "@/app/volunteer/timesheet-record/reminders";


export default function Page() {
    return (
        <main className="flex flex-col justify-between h-screen items-center ">
        {/*    table on the left with 7 columns and one column on the right*/}
            <div className={"flex flex-row mx-auto px-8 gap-12"}>
                <TimesheetBoard/>
                <Reminders/>

            </div>
        </main>
    );
}