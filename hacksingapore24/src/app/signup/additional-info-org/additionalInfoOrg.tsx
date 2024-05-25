'use client';


import {useForm} from "react-hook-form";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import { useRouter } from 'next/navigation'
import {Input} from "@/components/ui/input";
import {doc, getFirestore, setDoc, updateDoc} from "@firebase/firestore";
import {app, auth} from "@/lib/firebase";



const locationEnum = z.enum(["North", "South", "East", "West", "Central"])
const locationTypes = [
    { label: "North", value: "north" },
    { label: "South", value: "south"},
    { label: "East", value: "east"},
    { label: "West", value: "west"},
    { label: "Central", value: "central"},
] as const

const formSchema = z.object({
    Name: z.string(),
    Location: z.string(),
    // Gender: z.string(),
    // Religion: z.string(),
    // Skills: z.set(),
    // LanguageProficiency: z.array(),
    // Experience: z.string(),
})

export default function AdditionalInfoOrgForm() {
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            Location: ""
            // Gender: "",
            // Religion: "",
            // Skills: "",
            // LanguageProficiency: "",
            // Experience: ""
        },
    })
    const db = getFirestore(app);
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("hi")
        console.log(values)
        // send to firestore
        console.log(auth.currentUser.uid)
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
            Name: values.Name,
            Location: values.Location
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField name={"Name"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <br/>
                        <Input {...field}/>
                    </FormItem>

                )}/>
                
                <FormField name={"Location"} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                        <br/>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            "w-[200px] justify-between",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value
                                            ? locationTypes.find(
                                                (locationType) => locationType.value === field.value
                                            )?.label
                                            : "Select Location"}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search..." />
                                    <CommandEmpty>Nothing found.</CommandEmpty>
                                    <CommandGroup>
                                        <CommandList>
                                            {locationTypes.map((locationType) => (

                                                <CommandItem
                                                    value={locationType.label}
                                                    key={locationType.value}
                                                    onSelect={() => {
                                                        form.setValue("Location", locationType.value)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            locationType.value === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {locationType.label}
                                                </CommandItem>
                                            ))}
                                        </CommandList>

                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <FormDescription>Choose your location</FormDescription>
                    </FormItem>
                )} />


                <Button type="submit">Submit</Button>
            </form>

        </Form>
    )
}