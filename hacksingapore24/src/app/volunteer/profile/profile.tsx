'use client'
import {doc, getDoc, getFirestore} from "@firebase/firestore";
import {app, auth} from "@/lib/firebase";
import {useEffect, useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";


export default function Profile() {
    // import user details from db
    const [gender, setGender] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [religion, setReligion] = useState()

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            const db = getFirestore(app)

            // check type of user
            getDoc(doc(db, "users", auth.currentUser.uid))
                .then((document: any) => {
                    if (document.exists()) {
                        // console.log(stages)
                        console.dir(document.data())
                        setGender(document.data().Gender);
                        setName(document.data().Name);
                        setEmail(document.data().providerData[0].email);
                        setReligion(document.data().Religion);
                        // console.log('hi')
                        console.log(document.data().Stages)
                        return document.data().Stages;

                    } else {
                        console.log("Document does not exist")
                        return null;
                    }

                })

        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);


    return (
        <div className={'w-96 flex flex-col gap-8'}>
            <h1 className={'text-3xl'}>Profile</h1>
            <Card className="shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="bg-blue-500">
                    <CardTitle className="text-2xl font-bold">Name</CardTitle>
                </CardHeader>
                <CardContent className="outline-card">
                    {name}
                </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="bg-blue-500">
                    <CardTitle className="text-2xl font-bold">Email</CardTitle>
                </CardHeader>
                <CardContent className="outline-card">
                    {email}
                </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="bg-blue-500">
                    <CardTitle className="text-2xl font-bold">Gender</CardTitle>
                </CardHeader>
                <CardContent className="outline-card">
                    {gender}
                </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="bg-blue-500">
                    <CardTitle className="text-2xl font-bold">Religion</CardTitle>
                </CardHeader>
                <CardContent className="outline-card">
                    {religion}
                </CardContent>
            </Card>
        </div>
    )
}