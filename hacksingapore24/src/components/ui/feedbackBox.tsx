export default function FeedbackBox(props:{content:string, rating:number}){
    return(
        <div className="bg-hack-100 rounded-xl p-3">
            <p className="text-justify">{`"${props.content}"`}</p>
            <p className="text-hack-400 text-center font-bold">{`${props.rating}/5 Stars`}</p>
        </div>
    )
}