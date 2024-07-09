export function Balance({Value}){

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance:
        </div>
        <div className="font-normal ml-4 text-lg">
            Rs {Value.toFixed(2)}
        </div>
    </div>
}