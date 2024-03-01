import Education from "./Education"
import Experience from "./experience/Experience"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Skills from "./Skills"
function Layout() {
    return (
        <section className="bg-[#1d1e21] h-fit p-1 w-full">
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            {/* <Education /> */}
        </section>
    )
}

export default Layout
