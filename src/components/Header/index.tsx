import Link from "next/link"

type HeaderProps = {
    children?: React.ReactNode,
    className?: string
}

export default function Header({children, className}: HeaderProps) {
    return (
        <header>
            <h1 className={
                `text-xl
                font-bold
                text-blue-500
                hover:text-blue-50
                hover:bg-blue-500
                transition
                duration-300
                ${className}`}>
                    <Link href='#'>
                        {children}
                    </Link>
            </h1>
        </header>
    )
}
