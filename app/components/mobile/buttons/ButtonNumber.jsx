export default function ButtonNumber({numero, handleClick}) {
    //console.log(handleClick)
    return <button className="button3" onClick={handleClick}>{numero}</button>
}