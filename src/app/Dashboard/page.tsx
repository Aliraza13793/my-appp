"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
const Dashboard=()=>{
    const router=useRouter();

    const handleback=()=>{
        router.back();
    }
    const handeblog=()=>{
        const number=Math.random();
        if(number<0.5){
        router.push("/about");
    }else{
        alert(number);
    }
};
    return (
    <div>
        <div className="py-4">
        <button className="bg-blue-500 rounded-sm p-5" onClick={handleback}>Back</button>

        </div>
        <div className="py-5">
            <button className="bg-red-400 rounded-sm p-6" onClick={handeblog}>Go to Blogpage</button>
        </div>This is Dashbord</div>)
}
export default Dashboard;