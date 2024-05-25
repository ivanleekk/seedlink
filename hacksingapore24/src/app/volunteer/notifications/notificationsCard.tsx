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


export default function NotificationsCard() {
    return (
        <div className={'text-wrap'}>
        <Card>
            <CardHeader>
                <CardTitle>You have no pending notifications!</CardTitle>
            </CardHeader>

        </Card>
        </div>
    )
}