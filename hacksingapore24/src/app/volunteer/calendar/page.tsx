import Image from "next/image";

export default function CalendarPage() {
    return(
        <main className="flex min-h-screen flex-col justify-between p-10 align-top">
            <div className="sticky flex flex-row w-full top-40 space-x-5">
                <div className="flex flex-col bg-white rounded space-y-5 w-[70%] justify-center pl-4 pt-5 pb-10">
                    <h1 className="text-5xl font-black text-center">May 2024</h1>
                    <div className="flex flex-row justify-around">
                        <h2 className="text-center">Sunday</h2>
                        <h2 className="text-center">Monday</h2>
                        <h2 className="text-center">Tuesday</h2>
                        <h2 className="text-center">Wednesday</h2>
                        <h2 className="text-center">Thursday</h2>
                        <h2 className="text-center">Friday</h2>
                        <h2 className="text-center">Saturday</h2>
                    </div>
                    <div className="grid grid-rows-5 grid-cols-7 justify-around space-y-3">
                        {Array.from(Array(35).keys()).map((value) =>(
                            <div className="flex border-4 border-b-neutral-600 rounded-xl w-[90%] h-24 px-2">
                                <p className="text-center text-xl font-bold text-gray-900">{(value - 3 + 31) % 31 + 1}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col bg-hack-300 rounded-xl w-[30%] space-y-2 p-5">
                    <h1 className="text-4xl font-bold text-center text-white">Reminders</h1>
                    <div className="flex flex-row bg-hack-200 rounded-xl">
                        <p className="text-lg text-center w-full">No reminders!</p>
                    </div>
                </div>
            </div>
        </main>
    )
}