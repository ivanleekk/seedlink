import SignUpForm from "@/app/signup/signUpForm";



export default function SignUp() {

    return (
        <main className="flex flex-col justify-between h-screen items-center ">
            <div className={"w-96"}>
                <h1 className={"text-center text-3xl flex-shrink-0"}>Create New Account</h1>
                <h2 className="text-center">Already Registered? <a href={"/login"} className={"underline"}>Login</a></h2>
                <br/>
                <SignUpForm/>
            </div>
        </main>
    );
}