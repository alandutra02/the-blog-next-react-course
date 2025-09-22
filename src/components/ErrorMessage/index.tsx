'use client'
type ErrorMessageProps = {
    titleError: string,
    codeError: string,
    children: React.ReactNode
}

export function ErrorMessage({titleError, codeError, children}: ErrorMessageProps) {
    console .log('erro de cliente ou servidor?')
    return (
        <>
            <title>{titleError}</title>
            <div className={`
                min-h-[320px]
                bg-slate-900
                text-slate-100
                mb-16 p-8 rounded-xl
                flex items-center justify-center
                text-center
                `}
            >
                <div>
                    <h1 className="text-7xl/tight mb-4 font-extrabold">{codeError}</h1>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
