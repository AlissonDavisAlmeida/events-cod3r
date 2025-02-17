import { Logo } from "./Logo";

type PageProps = {
    children: React.ReactNode;
    className?: string;
}

export const Page = ({ children, className }: PageProps) => {
    return (
        <div className="
            flex flex-col items-center py-10 min-h-screen
            bg-[url('/background.png')] bg-cover bg-center
        ">
            <Logo />
            <main
                className={`flex-1 flex flex-col justify-center py-10 container  ${className ?? ""}`}
            >
                {children}
            </main>
        </div>
    )
}
