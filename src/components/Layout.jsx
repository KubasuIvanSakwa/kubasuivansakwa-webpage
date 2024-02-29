import Hero from "./Hero"
import Navbar from "./Navbar"
import Skills from "./Skills"
function Layout() {
    return (
        <section className="bg-[#1d1e21] h-fit p-1 w-full">
            <Navbar />
            <Hero />
            <Skills />
        </section>
    )
}

export default Layout
