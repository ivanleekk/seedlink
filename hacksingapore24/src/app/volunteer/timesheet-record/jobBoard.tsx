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

const jobs = [
    {
        organisation: "Organisation1",
        rating: "4.5",
        volunteeringLocation: "Bedok",
        volunteeringDescription: "Help the elderly",
        volunteeringPeriod: "May-Aug",
        requiredSkills: "Compassion, Patience",
        vacancy: "10"
    },
    {
        organisation: "Organisation2",
        rating: "4.7",
        volunteeringLocation: "Clementi",
        volunteeringDescription: "Teach children",
        volunteeringPeriod: "Jun-Sep",
        requiredSkills: "Teaching, Patience",
        vacancy: "8"
    },
    {
        organisation: "Organisation3",
        rating: "4.2",
        volunteeringLocation: "Woodlands",
        volunteeringDescription: "Clean the beach",
        volunteeringPeriod: "Jul-Oct",
        requiredSkills: "Physical strength, Environmental awareness",
        vacancy: "20"
    },
    {
        organisation: "Organisation4",
        rating: "4.8",
        volunteeringLocation: "Pasir Ris",
        volunteeringDescription: "Plant trees",
        volunteeringPeriod: "Aug-Nov",
        requiredSkills: "Physical strength, Environmental awareness",
        vacancy: "15"
    },
    {
        organisation: "Organisation5",
        rating: "4.6",
        volunteeringLocation: "Tanjong Pagar",
        volunteeringDescription: "Food distribution",
        volunteeringPeriod: "Sep-Dec",
        requiredSkills: "Compassion, Organizational skills",
        vacancy: "12"
    },
];

export function JobBoard() {
    return (
        <div className={'flex-col bg-hack-200 rounded-3xl p-10'}>
            <div className={'flex flex-row space-y-2 pl-2 pb-4'}>
                <h1 className={'text-3xl'}>Bulletin Board</h1>
                <span className={'w-1.5'}></span>
                <CiFilter className={'my-auto size-5'}/>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Organisation</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Required Skills</TableHead>
                    <TableHead>Vacancy</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {jobs.map((job) => (
                    <TableRow key={job.organisation}>
                        <TableCell className="font-medium">{job.organisation}</TableCell>
                        <TableCell>{job.rating}</TableCell>
                        <TableCell>{job.volunteeringDescription}</TableCell>
                        <TableCell>{job.volunteeringLocation}</TableCell>
                        <TableCell>{job.volunteeringPeriod}</TableCell>
                        <TableCell>{job.requiredSkills}</TableCell>
                        <TableCell>{job.vacancy}</TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    )
}
