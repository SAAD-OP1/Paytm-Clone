import { useNavigate } from "react-router-dom"

export const Appbar = ({name}) => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/');
      };

    const handleClick2 = () => {
        navigate('/updateDetails');
    };

    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col font-medium justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col font-medium justify-center h-full mr-4">
                {name}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 pb-1 cursor-pointer" onClick = {
                handleClick1
            }>
                <div className="flex flex-col justify-center h-full text-xl">
                    +
                </div>
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 cursor-pointer" onClick ={
                handleClick2
            }>
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}