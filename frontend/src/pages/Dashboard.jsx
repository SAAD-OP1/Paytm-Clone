import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"
import axios from "axios"; 

const Dashboard = () => {
    const [balance, setBalance] = useState(0); // Initialize balance with a default value
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => {
            setBalance(response.data.balance);
        })
        .catch(error => {
            console.error("Error fetching balance:", error);
        });
        axios.get("http://localhost:3000/api/v1/user/name", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            setName(response.data.name);
        })
        .catch(error => {
            console.error("Error occurred while fetching user's name");
        })
    }, []);

    return (
        <div>
            <Appbar name = {name}/>
            <div className="m-8">
                <Balance Value={balance} /> 
                <Users />
            </div>
        </div>
    );
}
export default Dashboard;