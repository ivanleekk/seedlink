import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CiFilter } from "react-icons/ci";
import {Input} from "@/components/ui/input";

type Record = {
    organisation: string;
    date: string;
    hours: number;
    otherDetails: string;
    attendance: "Approved" | "Pending" | "Rejected";
    feedback: string;
};

const records: Record[] = [
    {
        organisation: "Organisation1",
        date: "1 Apr 2024",
        hours: 3,
        otherDetails: "Helped the elderly",
        attendance: "Approved",
        feedback: "Good job!",
    },
    {
        organisation: "Organisation2",
        date: "2 Apr 2024",
        hours: 4,
        otherDetails: "Taught children",
        attendance: "Pending",
        feedback: "Keep up the good work!",
    },
    {
        organisation: "Organisation3",
        date: "3 Apr 2024",
        hours: 5,
        otherDetails: "Cleaned the beach",
        attendance: "Rejected",
        feedback: "Please submit your attendance on time.",
    },
    {
        organisation: "Organisation4",
        date: "4 May 2024",
        hours: 6,
        otherDetails: "Planted trees",
        attendance: "Approved",
        feedback: "Excellent work!",
    },
    {
        organisation: "Organisation5",
        date: "5 May 2024",
        hours: 7,
        otherDetails: "Distributed food",
        attendance: "Pending",
        feedback: "Awaiting approval.",
    },
];
export function TimesheetBoard() {
    return (
        <div className={'flex-col bg-hack-200 rounded-3xl p-10 justify-between'}>
            <div className={'flex flex-row pl-2 pb-4'}>
                <h1 className={'text-3xl'}>Timesheet</h1>
                <span className={'w-1.5'}></span>
                <Input className="w-64 ml-4 bg-white my-auto" type={"search"}
                       placeholder={"Search by Organisation Name"}/>
                <span className={'w-1.5'}></span>

                <CiFilter className={'my-auto size-5'}/>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Organisation</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Hours</TableHead>
                    <TableHead>Other Details</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Feedback</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {records.map((job) => (
                    <TableRow key={job.organisation}>
                        <TableCell className="font-medium">{job.organisation}</TableCell>
                        <TableCell>{job.date}</TableCell>
                        <TableCell>{job.otherDetails}</TableCell>
                        <TableCell>{job.hours}</TableCell>
                        <TableCell>{job.attendance}</TableCell>
                        <TableCell>{job.feedback}</TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    )
}
