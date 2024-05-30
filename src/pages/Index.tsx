import React from "react";

const IndexPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Bem-vindo à FaceForm</h1>
            <p className="text-lg text-gray-700 mb-8">A sua plataforma de formulários favorita</p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out focus:outline-none">
                Começar
            </button>
        </div>
    )
}

export default IndexPage
