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
            className="h-fit w-full"
        >
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
            <section>
                <div className="h-fit p-1 flex justify-start flex-row-reverse mt-[3rem] mb-1">
                <div className="flex gap-4">
                    <div
                        style={{
                            background: "url('https://preview.colorlib.com/theme/oraxol/images/work-1.jpg.webp')  center center / cover #4A148C",
                        }}
                        className="h-[10rem] w-[11rem]"
                    >
                    </div>

                    <div
                        style={{
                            background: "url('/src/assets/dp.jpeg')  top center / cover #4A148C",
                        }}
                        className="h-[10rem] w-[10rem]"
                    >
                    </div>
                    <div
                        style={{
                            background: "url('/src/assets/dp.jpeg')  top center / cover #4A148C",
                        }}
                        className="h-[10rem] w-[10rem]"
                    >
                    </div>
                    <div
                        style={{
                            background: "url('/src/assets/dp.jpeg')  top center / cover #4A148C",
                        }}
                        className="h-[10rem] w-[10rem]"
                    >
                    </div>
                </div>
                </div>
            </section>
            <hr 
                style={{
                    height: '0.5px',
                    background: 'rgba(255, 255, 255, 0.3)',
                    weight: '100%',
                    margin: '1rem 0',
                    color: 'inherit',
                    border: '0',
                    opacity: '0.25'
                }}
            />
        </section>
    )
}

export default Hero
