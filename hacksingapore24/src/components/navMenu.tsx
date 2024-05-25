"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const volunteerComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Home",
        href: "/volunteer",
        description:
            "Volunteer Home Page.",
    },
    {
        title: "Bulletin Board",
        href: "/volunteer/bulletin-board",
        description:
            "Look out for new volunteering opportunities.",
    },
    {
        title: "Calendar (Schedule)",
        href: "/volunteer/calendar",
        description:
            "Look at your volunteering schedule.",
    },
    {
        title: "Timesheet Record",
        href: "/volunteer/timesheet-record",
        description: "View your timesheet history.",
    },
    {
        title: "Points and Metrics",
        href: "/volunteer/dashboard",
        description:
            "Check your points and volunteering metrics.",
    },
    {
        title: "Contact Organisation",
        href: "/volunteer/timesheet-record",
        description:
            "Contact the organisations you're helping out.",
    },
    {
        title: "FAQ & QnA Portal",
        href: "/volunteer/faq",
        description:
            "View our FAQ and ask us questions.",
    },
    {
        title: "Your Profile",
        href: "/volunteer/profile",
        description:
            "Checkout your profile.",
    },
    {
        title: "Notifications",
        href: "/volunteer/notifications",
        description:
            "Check your notifications.",
    },

]

const organisationComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Home",
        href: "/organisation/dashboard",
        description:
            "Organisation Home Page.",
    },
    {
        title: "Add to Bulletin Board",
        href: "/organisation/bulletin-board",
        description:
            "Add new volunteering opportunities.",
    },
    {
        title: "Calender (Schedule)",
        href: "/organisation/calender",
        description:
            "Look at your volunteers' schedule.",
    },
    {
        title: "Attendance List",
        href: "/organisation/attendance",
        description: "View your attendance list.",
    },
    {
        title: "Contact User",
        href: "/organisation/contact-user",
        description:
            "Contact the users helping you out.",
    },
    {
        title: "FAQ & QnA Portal",
        href: "/organisation/faq",
        description:
            "View our FAQ and ask us questions.",
    },
    {
        title: "Your Profile",
        href: "/organisation/profile",
        description:
            "Checkout your profile.",
    },

]

interface NavMenuProps {
    type?: 'organisation' | 'volunteer'
}
export default function navMenu({type}: NavMenuProps) {
    if (type === "organisation") {
        return (
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {organisationComponents.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        )
    } else {
        return (
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                                {volunteerComponents.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        )
    }
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
