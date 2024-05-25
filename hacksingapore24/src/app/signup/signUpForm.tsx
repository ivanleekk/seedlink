'use client';


import {useForm} from "react-hook-form";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {auth} from "@/lib/firebase";



const userEnum = z.enum(["user", "organisation"])
const userTypes = [
    { label: "User", value: "user" },
    { label: "Organisation", value: "organisation" },
] as const
type UserEnum = z.infer<typeof userEnum>
const formSchema = z.object({
    Name: z.string().min(2).max(50),
    Email: z.string().email(),
    Password: z.string().min(8).max(50),
    ConfirmPassword: z.string().min(8).max(50),
    UserType: userEnum
})

export default function SignUpForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            Email: "",
            Password: "",
            ConfirmPassword: "",
            UserType: "user"
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        // firebase auth
        createUserWithEmailAndPassword(auth, values.Email, values.Password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    //TODO: make the confirm password field work
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField name={"Name"} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormDescription>Enter your full name</FormDescription>
                    </FormItem>
                )} />
                <FormField name={"Email"} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormDescription>Enter your email address</FormDescription>
                    </FormItem>
                )} />
                <FormField name={"Password"} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input {...field} type={"password"} />
                        </FormControl>
                        <FormDescription>Enter your password</FormDescription>
                    </FormItem>
                )} />
                <FormField name={"ConfirmPassword"} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <Input {...field} type={"password"} />
                        </FormControl>
                        <FormDescription>Confirm your password</FormDescription>
                    </FormItem>
                )} />
                <FormField name={"UserType"} render={({ field }) => (
                    <FormItem>
                        <FormLabel>User Type</FormLabel>
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
                                            ? userTypes.find(
                                                (userType) => userType.value === field.value
                                            )?.label
                                            : "Select user type"}
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
                                            {userTypes.map((userType) => (

                                                <CommandItem
                                                    value={userType.label}
                                                    key={userType.value}
                                                    onSelect={() => {
                                                        form.setValue("UserType", userType.value)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            userType.value === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {userType.label}
                                                </CommandItem>
                                            ))}
                                        </CommandList>

                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <FormDescription>Choose your user type</FormDescription>
                    </FormItem>
                )} />
                <Button type="submit">Sign Up</Button>
            </form>
        </Form>
    )
}