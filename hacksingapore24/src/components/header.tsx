import Image from "next/image";


export default function Header() {
    return (
        <header className="bg-hack-100 fixed top-0 left-0 right-0">
        <div className="flex flex-row px-4 py-6">
            <div>
                <Image src="/help_circle.png" alt="HackSingapore 2024" width={50} height={50} />

            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-800">HackSingapore 2024</h1>

            </div>
        </div>
        </header>
    );
}