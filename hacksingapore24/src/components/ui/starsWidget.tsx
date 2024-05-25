import Image from "next/image";

export default function StarsWidget() {
    function chooseStar(index:number, rating:number){
        if((rating - index) >= 1) return "filled";
        return "not_filled"
    }
    const rating = 3

    return(
        <div className="flex flex-col space-y-3 justify-center min-w-full px-3 py-10 border-4 border-b-hack-400 rounded-2xl
        min-h-fit bg-hack-100">
            <div className="flex flex-row justify-around min-w-full">
                <Image src={`/stars/${chooseStar(0,rating)}.webp`} alt="star 1" width={80} height={200}/>
                <Image src={`/stars/${chooseStar(1,rating)}.webp`} alt="star 1" width={80} height={200}/>
                <Image src={`/stars/${chooseStar(2,rating)}.webp`} alt="star 1" width={80} height={200}/>
                <Image src={`/stars/${chooseStar(3,rating)}.webp`} alt="star 1" width={80} height={200}/>
                <Image src={`/stars/${chooseStar(4,rating)}.webp`} alt="star 1" width={80} height={200}/>
            </div>
            <div className="flex flex-col ">
                <p className="text-center text-4xl font-bold">{`Rating: ${rating}/5 Stars`}</p>
            </div>
        </div>
    )
}