'use client'

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/lib/firebase";
import Image from "next/image";

const formSchema = z.object({
    Organisation: z.string(),
    Message: z.string().max(1500),
})

export default function contactUsPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Organisation: "Organisation name",
            Message: "Type message here...",
        },
    })
    const router = useRouter()
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return(
        <main className="flex min-h-screen flex-col justify-between p-10 align-top">
            <div className="flex flex-row sticky top-32 space-y-5">
                <div className="flex flex-col w-[60%]">
                    <Image src="/reply-placeholder.webp" alt="reply placeholder" width={800} height={200} />

                </div>
                <div className="flex flex-col w-[35%] mx-3 justify-center">
                    <h1 className="text-4xl font-bold text-hack-400 text-center mb-5">Contact Organisation</h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField name={"Organisation"} render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Organisation</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )} />
                            <FormField name={"Message"} render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )} />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </main>
)
}