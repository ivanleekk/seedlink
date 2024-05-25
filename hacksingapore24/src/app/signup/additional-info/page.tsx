import AdditionalInfoForm from "@/app/signup/additional-info/additionalInfo";

export default function AdditionalInfo() {
    return (
        <main className="flex flex-col justify-center h-screen items-center ">
            <h1 className={"text-3xl text-center"}>Fill in your additional info so that we can suggest
                <br/>better volunteering opportunities for you!</h1>
            <br/>
            <AdditionalInfoForm/>
        </main>
    );
}