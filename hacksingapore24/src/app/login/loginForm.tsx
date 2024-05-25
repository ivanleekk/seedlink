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
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app, auth} from "@/lib/firebase";
import {useRouter} from "next/navigation";
import {doc, getDoc, getFirestore} from "@firebase/firestore";

const formSchema = z.object({
    Email: z.string().email(),
    Password: z.string().min(8).max(50),
})

export default function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Email: "",
            Password: "",
        },
    })
    const router = useRouter()
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        // firebase auth
        signInWithEmailAndPassword(auth, values.Email, values.Password)
            .then(() => console.log("logged in"))
            .then(() => {
                    // check user type from firebase
                    const db = getFirestore(app);
                    const docRef = doc(db, "users", auth.currentUser.uid);
                    const userTypes = getDoc(docRef).then((document) => {
                        if (document.exists()) {
                            return document.data().Type;
                        }
                    }).then((userType: any) => {
                        if (userType === 'volunteer') {
                            router.push('/volunteer')
                        } else {
                            router.push('/organisation/dashboard')
                        }
                    })
                        .catch(console.error)
                    // redirect to dashboard


                }
            )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Button type="submit">Login</Button>
            </form>
        </Form>
    )
}