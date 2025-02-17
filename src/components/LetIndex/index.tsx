export default function LetIndex(){
    let index = 0

    function handleClick(){
        index = index + 1
        console.log("Let "+index)

    }
    return (
        <div>
        <h4>{index}</h4>
        <button onClick={handleClick}>Click Let</button>
        </div>
    )
}