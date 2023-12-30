import Header from "@/components/header"

function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default HomeLayout
