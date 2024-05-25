
import AdditionalInfoOrgForm from "@/app/signup/additional-info-org/additionalInfoOrg";

export default function AdditionalInfo() {
    return (
        <main className="flex flex-col justify-between h-screen items-center ">
            <div className={"w-96 h-screen items-center"}>
                <h1 className={"text-3xl text-center"}>Fill in your additional info for your organisation!</h1>
                <br/>
                <AdditionalInfoOrgForm/>
            </div>
        </main>
    );
}