'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {CiMenuBurger} from "react-icons/ci";



interface NavMenuProps {
    type?: 'organisation' | 'volunteer'
}

export default function NavMenuOld({type}: NavMenuProps) {

    // if organisation
    if (type === "organisation") {
        return (
            <div className={"my-auto"}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <CiMenuBurger className={'my-auto'} size={40} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem><a href={'/organisation'}>Home Page</a></DropdownMenuItem>
                    <DropdownMenuItem>Add to Bulletin</DropdownMenuItem>
                    <DropdownMenuItem>Calender (Schedule)</DropdownMenuItem>
                    <DropdownMenuItem>Attendance List</DropdownMenuItem>
                    <DropdownMenuItem>Points and Metrics</DropdownMenuItem>
                    <DropdownMenuItem>Contact Users</DropdownMenuItem>
                    <DropdownMenuItem>FAQ & QnA Portal</DropdownMenuItem>
                    <DropdownMenuItem>Your Profile</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        );
    } else {
        return (
            <div className={"my-auto"}>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <CiMenuBurger  className={'my-auto'} size={40} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem><a href={'/volunteer'}>Home Page</a></DropdownMenuItem>
                        <DropdownMenuItem>Add to Bulletin</DropdownMenuItem>
                        <DropdownMenuItem>Calender (Schedule)</DropdownMenuItem>
                        <DropdownMenuItem>Timesheet Record</DropdownMenuItem>
                        <DropdownMenuItem>Points and Metrics</DropdownMenuItem>
                        <DropdownMenuItem>Contact Organisation</DropdownMenuItem>
                        <DropdownMenuItem>FAQ & QnA Portal</DropdownMenuItem>
                        <DropdownMenuItem>Your Profile</DropdownMenuItem>
                        <DropdownMenuItem>Notifications</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        );
    }
}