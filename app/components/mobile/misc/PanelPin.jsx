export default function PanelPin({pin}) {    
    return (
        <div className="w-full h-26 flex">
            <div className="display1number">{pin[0]}</div>
            <div className="display1number">{pin[1]}</div>
            <div className="display1number">{pin[2]}</div>
            <div className="display1number">{pin[3]}</div>
        </div>
    )
}