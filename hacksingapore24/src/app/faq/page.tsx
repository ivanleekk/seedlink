export default function FaqPage() {
    return(
        <main className="flex min-h-screen flex-col justify-between p-10 align-top">
            <div className="flex flex-col sticky top-32 space-y-5">
                <h1 className="text-5xl font-bold text-white w-[90%] mx-auto bg-hack-300 rounded-xl text-center p-3
                ">Frequently Asked Questions</h1>
                <div className="w-[90%] mx-auto bg-hack-100 rounded-xl p-5 space-y-5">
                    <div className="bg-hack-200 rounded-xl p-4">
                        <h2 className="text-3xl font-bold w-full mb-3">Question 1</h2>
                        <p className="text-xl w-full text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                    <div className="bg-hack-200 rounded-xl p-4">
                        <h2 className="text-3xl font-bold w-full mb-3">Question 2</h2>
                        <p className="text-xl w-full text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}