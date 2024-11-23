import { Page } from "@/components/template/Page";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Page>
            {children}
        </Page>
    )
}
