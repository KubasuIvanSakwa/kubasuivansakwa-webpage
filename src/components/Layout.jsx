import Hero from "./Hero"
import Navbar from "./Navbar"
function Layout() {
    return (
        <section className="bg-[#1d1e21] h-fit p-1 w-full">
            <Navbar />
            <Hero />
        </section>
    )
}

export default Layout
