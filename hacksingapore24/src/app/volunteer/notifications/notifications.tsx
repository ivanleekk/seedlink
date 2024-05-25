
import NotificationsCard from "@/app/volunteer/notifications/notificationsCard";


export default function Notifications() {
    return (
        <div className={'flex-col bg-hack-200 rounded-3xl p-10 w-1/3'}>
            <h1 className={'text-3xl'}>Notifications</h1>
            <br/>
            <NotificationsCard/>
        </div>
    )
}