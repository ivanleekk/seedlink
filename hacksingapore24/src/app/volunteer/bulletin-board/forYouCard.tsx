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


const volunteeringOpportunities = [
    {
        organisation: "Organisation1",
        description: "Help the elderly",
    },
    {
        organisation: "Organisation2",
        description: "Teach children",
    },
    {
        organisation: "Organisation3",
        description: "Clean the beach",
    },
];

const feedbacks = [
    {
        organisation: "Organisation1",
        description: "Feedback for helping the elderly event",
    },
    {
        organisation: "Organisation2",
        description: "Feedback for teaching children event",
    },
    {
        organisation: "Organisation3",
        description: "Feedback for beach cleaning event",
    },
];

export default function ForYouCard() {
    return (
        <div className={'text-wrap'}>
        <Card>
            <CardHeader>
                <CardTitle>Remember to make bookings for the following:</CardTitle>
            </CardHeader>
            <CardContent>
                {volunteeringOpportunities.map((opportunity, index) => (
                    <div key={index} className={'flex flex-row  justify-between'}>
                    <p key={index}>
                        <b>{opportunity.organisation}</b>
                        <br/>
                        {opportunity.description}
                        <br/>
                        <br/>
                    </p>
                        <Button className={buttonVariants({variant: "default"})}>
                            <CiCalendarDate/>
                            <span className={"w-1"}/>
                            Book a Timeslot
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>
            <br/>
            <Card>
                <CardHeader>
                    <CardTitle>Remember to submit your feedback for the following:
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {feedbacks.map((feedback, index) => (
                        <p key={index}>
                            <b>({index + 1}) {feedback.organisation}</b>
                            <br/>
                            <a href={'/volunteer/bulletin-board'}><u>{feedback.description}</u></a>
                            <br/>
                            <br/>
                        </p>
                    ))}
                </CardContent>
                <CardFooter>
                    <Button className={buttonVariants({variant: "default"})}>
                        <CiCircleAlert/>
                        <span className={"w-1"}/>
                        Click here to access full announcement
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}