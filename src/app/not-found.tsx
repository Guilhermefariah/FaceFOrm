import Link from "next/link";

export default function NontFound(){
    return (
        <>
            <h1>404</h1>
            <p>Página não exite</p>
            <Link href="/" passHref>
                <div>Voltar</div>
            </Link>
        </>
    )
}