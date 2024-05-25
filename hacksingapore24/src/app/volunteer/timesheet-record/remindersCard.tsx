import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button, buttonVariants} from "@/components/ui/button";
import { CiCircleAlert } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";


export default function RemindersCard() {
    return (
        <div className={'text-wrap'}>
        <Card>
            <CardHeader>
                <CardTitle>[NOW] You have an upcoming event to attend at Organisation 2:</CardTitle>
            </CardHeader>
            <CardContent>

                Date: 30th May 2024 <br/>
                Timeslot Booked: 9am-12pm <br/>
                Notes: Bring IC for verification
            </CardContent>
        </Card>
            <br/>
            <Card>
                <CardHeader>
                    <CardTitle className={'text-error'}>WARNING
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    Based on your bookings, you have accumulated a total of 15 points this month (May 2024)!<br/>
                    <br/>

                    To maintain your silver membership status, you need another 10 points by the end of June (30 June
                    2024).<br/>
                    <br/>

                    <b>NOTE</b>: Cancel bookings if you cannot make it, else, a red flag will be added to your name for the
                    next 3 months!
                </CardContent>

            </Card>
        </div>
    )
}