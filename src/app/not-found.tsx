import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-500">404</h1>
            <p className="text-lg text-gray-700">Página não existe</p>
            <Link href="/" passHref>
                <div className="mt-4 text-blue-500 hover:underline cursor-pointer">Voltar</div>
            </Link>
        </div>
    );
}
