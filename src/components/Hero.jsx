// import { useState, useEffect } from "react"
import ArrowDown from './ArrowDown'

function Hero() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://leetcodestats.cyclic.app/KubasuIvanSakwa")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])

    // console.log(data)

    return (
        <section
            className=" w-full h-[30rem] p-3 relative flex justify-end"
        >
            <div 
                className="flex relative top-[7rem] ml-10 w-[60rem] h-fit p-3"
            >
                <ArrowDown />
                <div >
                    <h4 
                        className="text-6xl w-[35rem] ml-4 text-white"
                    >
                        I am Kubasu Ivan Sakwa, 
                        An Aspiring Front-end Developer from <span className="underline underline-offset-4">Kenya</span>.
                    </h4>
                    <button
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)'
                        }}
                        className="mt-10 p-1 pl-2 pr-2 text-white ml-3"
                    >
                        Available for freelance work &#x2192;
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
