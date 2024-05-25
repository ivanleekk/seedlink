export default function Contacts() {
    return(
        <div className={`flex flex-col justify-center text-xl space-y-1`}>
            <div className={`flex flex-row justify-center`}>
                <p className={`text font-bold mr-1`}>Contact Us:</p>
                <p>+65 9123 4567 | seedlink@gmail.com</p>
            </div>
            <div className={`flex flex-row justify-center`}>
                <p>Instagram: @seedlink | Telegram: @seedlink</p>
            </div>
        </div>
    )
}
