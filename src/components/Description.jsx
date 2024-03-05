import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Pageheader from "./Pageheader"
import projects from './projects'

function Description() {
    //when I will fetch from github I will fetch with stars
    const { idno } = useParams();
    const active = [projects.find((item) => item?.usedTech === idno || item?.language2 === idno)]

    const [hoveredButtonId, setHoveredButtonId] = useState(null)



    const handleMouseOver = (buttonId) => {
        setHoveredButtonId(buttonId);
    };
    
    const handleMouseOut = () => {
        setHoveredButtonId(null);
    };

    return (
        <section>
            <Link
                to=".."
                className="flex text-xl absolute text-white mt-[-1rem] pl-3"
            >
                back
            </Link>
            <Pageheader
                subTitle={`${idno}`}
                mt={'mt-[2rem]'}
            />
            <section
                className="h-fit w-full gap-3 p-3"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, 24rem)',
                    justifyContent: 'center'

                }}
            >
                {idno !== 'Python' ? active.map(item => (
                    <div
                        key={item?.name}
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}
                        className={`h-fit overflow-hidden rounded-lg flex flex-col justify-center items-center relative pb-4 grayscale transition-all hover:grayscale-0`}
                    >
                        <div
                            style={{
                                background: `url('${item?.image}')  top center / cover #4A148C`,
                            }}
                            className="w-full h-[13rem] relative top-0 rounded-t-lg "
                        >
                            {/* <img src={item.image} className={`w-[2rem] opacity-1 grayscale`} /> */}
                        </div>
                        <div className="relative top-3 flex flex-col justify-center items-center w-full h-fit">
                            <div
                                className="w-full h-fit flex justify-center"
                            >
                                <button
                                    className="border p-2 mr-0 w-[7rem] m-1 rounded-l-xl text-white font-[600]"
                                    onMouseOut={handleMouseOut}
                                    style={{ border: hoveredButtonId === item?.id ? "none" : "" }}
                                    onClick={() => {
                                        window.open(
                                        `${item.codeLink}`,
                                        '_blank' // <- This is what makes it open in a new window.
                                    )}}
                                >
                                    Code
                                </button>
                                <button
                                    className="p-2 w-[7rem] m-1 ml-0 pl-0 rounded-r-xl text-white font-[600]"
                                    onMouseOver={() => handleMouseOver(item?.id)}
                                    onClick={() => {
                                        window.open(
                                        `${item.liveLink}`,
                                        '_blank' // <- This is what makes it open in a new window.
                                    )}}
                                    onMouseOut={handleMouseOut}
                                    style={{ border: hoveredButtonId === item?.id ? "1px solid white" : "" }}
                                >
                                    Live Demo
                                </button>
                            </div>
                            <div className="w-full flex justify-center items-center flex-col h-fit pt-2">
                                <p className="text-[20px] font-[600] text-[#e6e5e5c0] pb-2">{item?.name}</p>
                                <p className="text-[#e6e5e5c0] font-[500] text-[17px] text-center pb-4 p-2">{item?.description}</p>
                            </div>
                        </div>
                    </div>)):
                    <p className="text-[#e6e5e5c0] font-[500] text-3xl text-center pb-4 p-2">not Projects here</p>}
            </section>
        </section>
    )
}

export default Description;
