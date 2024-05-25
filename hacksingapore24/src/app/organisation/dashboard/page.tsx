import Image from "next/image";
import StarsWidget from "@/components/ui/starsWidget";
import job from "@/lib/job";
import FeedbackItem from "@/lib/feedbackItem";
import FeedbackBox from "@/components/ui/feedbackBox";

const jobs = [new job("Volunteer Job 1","30 May", true),
new job("Volunteer Job 2","1 June", false),]

const reviews = [new FeedbackItem("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",5),
new FeedbackItem("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",1)]

export default function organisationDashboardPage() {
    return(
        <main className="flex min-h-screen flex-col justify-between p-10 align-top">
            <div className="sticky flex flex-row w-full top-40 space-x-5">
                <div className="flex flex-col relative w-[40%] l-0 space-y-5 justify-center">
                    <div className="flex flex-col justify-center">
                        <StarsWidget/>
                    </div>
                    <div className="flex flex-col justify-center bg-hack-300 rounded-2xl space-y-5 p-5">
                        <h1 className="text-white text-4xl">Pending Volunteer Jobs:</h1>
                        {jobs.map((Job: job) => (
                            <div className="relative flex flex-col bg-hack-200 rounded-xl space-y-2 p-3">
                                <h1 className="text-xl text-center">{`[DRAFT] ${Job.name} on ${Job.date} 
                                ${Job.complete ? "COMPLETE" : "INCOMPLETE"}`}</h1>
                                <button className="text-center text-lg text-white bg-hack-300 rounded
                                w-60 mx-auto">CLICK HERE TO ACCESS DRAFT
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col relative w-[30%] l-0 space-y-5 justify-center">
                    <h1 className="text-center text-3xl font-bold">~ Latest Updates! ~</h1>
                    <div className="flex flex-col bg-hack-200 rounded-xl space-y-5 p-5">
                        <p className="text-center text-2xl font-bold">METTA School</p>
                        <p className="text-center text-2xl font-bold">Feedback by Volunteers:</p>
                        {reviews.map((feedback) => (
                            <FeedbackBox content={feedback.content} rating={feedback.rating} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col relative w-[25%] l-0 space-y-5 justify-center bg-hack-300 rounded-xl">
                    <div className="flex flex-row absolute top-5 left-5 space-x-5">
                        <Image src={"/notification-bell.svg"} alt={"bell"} width={30} height={24}/>
                        <h1 className="text-left text-3xl font-bold text-white">Notifications</h1>
                    </div>
                    <div className="flex flex-col rounded-xl space-y-5 p-5 min-w-max top-20">
                        <div className="relative flex flex-col bg-hack-200 rounded-xl space-y-2 p-3">
                            <p className="text-center text-2xl font-bold">No notifications!</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

