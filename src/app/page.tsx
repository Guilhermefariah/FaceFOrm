import React from "react";
import SupportForm from "../components/SupportForm";
import Navbar from "../components/Header";

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar /> 
            <div className="flex-grow flex items-center justify-center p-10">
                <div className="bg-blue-50 p-12 rounded-lg shadow-lg max-w-md w-full  hover:bg-blue-100">
                    <h1 className="text-3xl font-bold text-zinc-700 text-center mb-5">Criar uma nova conta</h1>
                    <hr className="my-4 border-t-2 border-zinc-300 w-full" />
                    <SupportForm />
                </div>
            </div>
        </div>
    )
}

export default Page