import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const Test = () => {

    const [msg, setMsg] = useState("");

    const fetchWelcomeMsg = async() => {
        try{
            const res = await apiClient.get("/hello") 
            setMsg(res.data.message);
        } catch(err) {
            console.log("Error",err);
        }
    }

    useEffect(() => {
        fetchWelcomeMsg();
    }, [])

    return (
        <div>
            <h1 className="text-xl font-bold text-green-600 mt-10 text-center">{msg}</h1>
        </div>
    );
};

export default Test;