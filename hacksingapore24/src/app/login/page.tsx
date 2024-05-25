import LoginForm from "@/app/login/loginForm";

export default function Login() {
    return (
        <main className="flex flex-col justify-center h-screen items-center ">
            <div className={"w-96"}>
                <h1 className={"text-center text-3xl flex-shrink-0"}>Login</h1>
                <br/>
                <LoginForm/>
            </div>
        </main>
    );
}