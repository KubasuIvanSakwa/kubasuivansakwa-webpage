import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pageheader from "./Pageheader";
import projects from './projects';

function Description() {
    //when I will fetch from github I will fetch with stars
    const { idno } = useParams();
    const active = [projects.find((item) => item?.usedTech === idno || item?.language2 === idno)]
    console.log(active)

    return (
        <section>
            <Link
                to=".."
                className="flex text-xl absolute text-white mt-[-1rem] pl-3 rounded-[28px]"
            >
                back
            </Link>
            <Pageheader
                subTitle={`${idno}`}
                mt={'mt-[2rem]'}
            />

            <section
                className="h-fit w-full gap-3 p-3 rounded-[28px]"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, 24rem)',
                    justifyContent: 'center'
                }}
            >
                {idno !== 'Python' ? active.map(item => (
                    <div
                        className="max-w-sm bg-[#1d1e21]/10 border shadow-lg border-gray-200 rounded-[28px] dark:border-gray-700"
                        key={item.id}
                    >
                        <a href="#">
                            <img className="rounded-t-[28px]" src={item.image} alt="image" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                            <div className="flex gap-2 items-center justify-center">
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Preview
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Code
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )) : ''}
            </section>
        </section>
    )
}

export default Description;

// <section
//     className="h-fit w-full gap-3 p-3"
//     style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, 24rem)',
//         justifyContent: 'center'

//     }}
// >
//     {idno !== 'Python' ? active.map(item => (
//         <div
//             key={item?.name}
//             style={{
//                 border: '1px solid rgba(255, 255, 255, 0.3)'
//             }}
//             className={`h-fit overflow-hidden rounded-lg flex flex-col justify-center items-center relative pb-4 grayscale transition-all hover:grayscale-0`}
//         >
//             <div
//                 style={{
//                     background: `url('${item?.image}')  top center / cover #4A148C`,
//                 }}
//                 className="w-full h-[13rem] relative top-0 rounded-t-lg "
//             >
//                 {/* <img src={item.image} className={`w-[2rem] opacity-1 grayscale`} /> */}
//             </div>
//             <div className="relative top-3 flex flex-col justify-center items-center w-full h-fit">
//                 <div
//                     className="w-full h-fit flex justify-center"
//                 >
//                     <button
//                         className="border p-2 mr-0 w-[7rem] m-1 rounded-l-xl text-white font-[600]"
//                         onMouseOut={handleMouseOut}
//                         style={{ border: hoveredButtonId === item?.id ? "none" : "" }}
//                         onClick={() => {
//                             window.open(
//                             `${item.codeLink}`,
//                             '_blank' // <- This is what makes it open in a new window.
//                         )}}
//                     >
//                         Code
//                     </button>
//                     <button
//                         className="p-2 w-[7rem] m-1 ml-0 pl-0 rounded-r-xl text-white font-[600]"
//                         onMouseOver={() => handleMouseOver(item?.id)}
//                         onClick={() => {
//                             window.open(
//                             `${item.liveLink}`,
//                             '_blank' // <- This is what makes it open in a new window.
//                         )}}
//                         onMouseOut={handleMouseOut}
//                         style={{ border: hoveredButtonId === item?.id ? "1px solid white" : "" }}
//                     >
//                         Live Demo
//                     </button>
//                 </div>
//                 <div className="w-full flex justify-center items-center flex-col h-fit pt-2">
//                     <p className="text-[20px] font-[600] text-[#e6e5e5c0] pb-2">{item?.name}</p>
//                     <p className="text-[#e6e5e5c0] font-[500] text-[17px] text-center pb-4 p-2">{item?.description}</p>
//                 </div>
//             </div>
//         </div>)):
//         <p className="text-[#e6e5e5c0] font-[500] text-3xl text-center pb-4 p-2">not Projects here</p>}
// </section> 