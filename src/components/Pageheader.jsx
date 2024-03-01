
function Pageheader({title, subTitle}) {
    return (
        <div className="w-full h-fit flex flex-col p-3 mt-[8rem] mb-10">
            <h1
                    className="text-[13px] tracking-[2px] mb-[5px] text-[#aaaaaa] font-[600]  w-full text-center"
                >
                    {title}
            </h1>
            <h2 
                className=" w-full text-center text-[28px] lg:text-[40px] font-[600] text-white leading-6"
            >
                {subTitle}
            </h2>
        </div>
    )
}

export default Pageheader
