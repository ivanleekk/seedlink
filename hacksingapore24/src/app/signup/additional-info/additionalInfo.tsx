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
import {useState} from "react";
import MultiSelectFormField from "@/components/ui/multi-select";
import {Input} from "@/components/ui/input";
import {doc, getFirestore, setDoc, updateDoc} from "@firebase/firestore";
import {app, auth} from "@/lib/firebase";
import {update} from "@firebase/database";


const genderEnum = z.enum(["Male", "Female", "Other"])
const genderTypes = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female"},
    { label: "Other", value: "other"}
] as const
const religionEnum = z.enum(["Christianity", "Islam", "Hinduism", "Buddhism", "Sikhism", "Judaism", "Other", "None"])
const religionTypes = [
    { label: "Christianity", value: "christianity" },
    { label: "Islam", value: "islam"},
    { label: "Hinduism", value: "hinduism"},
    { label: "Buddhism", value: "buddhism"},
    { label: "Sikhism", value: "sikhism"},
    { label: "Judaism", value: "judaism"},
    { label: "Other", value: "other"},
    { label: "None", value: "none"},
] as const
const skillsEnum = z.enum(["Dealing with Elderly", "Dealing with Children", "Marketing", "Fundraising", "Event Planning"])
const skillsArr = [
    { label: "Dealing with Elderly", value: "dealing_with_elderly" },
    { label: "Dealing with Children", value: "dealing_with_children"},
    { label: "Marketing", value: "marketing"},
    { label: "Fundraising", value: "fundraising"},
    { label: "Event Planning", value: "event_planning"},
]
const skillsTypes = [
    { label: "Dealing with Elderly", value: "dealing_with_elderly" },
    { label: "Dealing with Children", value: "dealing_with_children"},
    { label: "Marketing", value: "marketing"},
    { label: "Fundraising", value: "fundraising"},
    { label: "Event Planning", value: "event_planning"},
] as const
const languageProficiencyEnum = z.enum(["English", "Mandarin", "Malay", "Tamil", "Hindi", "Hokkien", "Hakka", "Cantonese", "Teochew"])
const languageProficiencyArr = [
    { label: "English", value: "english" },
    { label: "Mandarin", value: "mandarin"},
    { label: "Malay", value: "malay"},
    { label: "Tamil", value: "tamil"},
    { label: "Hindi", value: "hindi"},
    { label: "Hokkien", value: "hokkien"},
    { label: "Hakka", value: "hakka"},
    { label: "Cantonese", value: "cantonese"},
    { label: "Teochew", value: "teochew"},
]
const languageProficiencyTypes = [
    { label: "English", value: "english" },
    { label: "Mandarin", value: "mandarin"},
    { label: "Malay", value: "malay"},
    { label: "Tamil", value: "tamil"},
    { label: "Hindi", value: "hindi"},
    { label: "Hokkien", value: "hokkien"},
    { label: "Hakka", value: "hakka"},
    { label: "Cantonese", value: "cantonese"},
    { label: "Teochew", value: "teochew"},
] as const
const locationEnum = z.enum(["North", "South", "East", "West", "Central"])
const locationTypes = [
    { label: "North", value: "north" },
    { label: "South", value: "south"},
    { label: "East", value: "east"},
    { label: "West", value: "west"},
    { label: "Central", value: "central"},
] as const
const locationArr = [
    { label: "North", value: "north" },
    { label: "South", value: "south"},
    { label: "East", value: "east"},
    { label: "West", value: "west"},
    { label: "Central", value: "central"},
]
const formSchema = z.object({
    Name: z.string(),
    Gender: z.string(),
    Religion: z.string(),
    // Skills: z.set(),
    // LanguageProficiency: z.array(),
    // Experience: z.string(),
})

export default function AdditionalInfoForm() {
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            Gender: "",
            Religion: "",
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
            Gender: values.Gender,
            Religion: values.Religion,
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
                <FormField name={"Gender"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Gender</FormLabel>
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
                                            ? genderTypes.find(
                                                (genderType) => genderType.value === field.value
                                            )?.label
                                            : "Select Gender"}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search..."/>
                                    <CommandEmpty>Nothing found.</CommandEmpty>
                                    <CommandGroup>
                                        <CommandList>
                                            {genderTypes.map((genderType) => (

                                                <CommandItem
                                                    value={genderType.label}
                                                    key={genderType.value}
                                                    onSelect={() => {
                                                        form.setValue("Gender", genderType.value)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            genderType.value === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {genderType.label}
                                                </CommandItem>
                                            ))}
                                        </CommandList>

                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </FormItem>

                )}/>
                <FormField name={"Religion"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Religion</FormLabel>
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
                                            ? religionTypes.find(
                                                (religionType) => religionType.value === field.value
                                            )?.label
                                            : "Select Religion"}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search..."/>
                                    <CommandEmpty>Nothing found.</CommandEmpty>
                                    <CommandGroup>
                                        <CommandList>
                                            {religionTypes.map((religionType) => (

                                                <CommandItem
                                                    value={religionType.label}
                                                    key={religionType.value}
                                                    onSelect={() => {
                                                        form.setValue("Religion", religionType.value)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            religionType.value === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {religionType.label}
                                                </CommandItem>
                                            ))}
                                        </CommandList>

                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </FormItem>

                )}/>
                <br/>
                <FormLabel>Skills</FormLabel>
                <MultiSelectFormField
                    options={skillsArr}
                    onValueChange={() => {
                    }}
                    placeholder="Select options"
                />
                <br/>
                <FormLabel>Language Proficiency</FormLabel>

                <MultiSelectFormField
                    options={languageProficiencyArr}
                    defaultValue={""}
                    onValueChange={() => {
                    }}
                    placeholder="Select options"
                />
                <br/>

                <FormLabel>Location Preference</FormLabel>
                <MultiSelectFormField
                    options={locationArr}
                    defaultValue={""}
                    onValueChange={() => {
                    }}
                    placeholder="Select options"
                />
                <br/>

                <FormLabel>Previous Experience</FormLabel>
                <FormControl>
                    <Input/>
                </FormControl>


                <Button type="submit">Submit</Button>
            </form>

        </Form>
    )
}