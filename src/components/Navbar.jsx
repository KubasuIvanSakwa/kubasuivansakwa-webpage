import { Link } from "react-router-dom"

function Navbar() {
    const navLinks = [
        {id: 1, title: 'Work', url: ''},
        {id: 2, title: 'Blog', url: ''},
        {id: 3, title: 'About', url: ''},
        {id: 4, title: 'Contact', url: ''}
    ]

    return (
        <nav
            className="flex justify-around w-full bg-[#1d1e21] text-[#aaaaaa]"
        >
            <div>
                <p className="p-5 text-2xl">Ivan</p>
            </div>
            <ul 
                className="flex"
            >
                {
                    navLinks.map(item => (
                        <li 
                            key={item.id}
                            className="p-5"
                        >
                            <Link
                                style={{
                                    WebkitTransition: '.3s all ease',
                                    transition: '.3s all ease',
                                    textDecoration: 'none',
                                }}
                                className="text-lg"
                                to={item.url}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
