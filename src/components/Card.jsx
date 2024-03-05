import Pageheader from "./Pageheader"
import { Link, Outlet } from "react-router-dom"

function Card(props) {
    return (
        <section 
            id={`${props.idName}`}
            className="w-full h-fit relative"
        >
            <Pageheader 
                title={`${props.title}`}
                subTitle={`${props.subTitle}`}
                mt={'mt-[8rem]'}
            />
            
            <section
                className=" h-fit w-full relative flex justify-center items-center mb-[5rem]">
                <section 
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `${props.grid}`,
                        justifyContent: 'center'

                    }}
                    className="w-full h-fit p-2 gap-3 "
                >
                    {props.identifier?.map((item) => (
                        <Link 
                            key={item.id}
                            to={`/description/${item.title}`}
                            style={{
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}
                            className={` ${props.cardsheight} card-btn rounded-lg flex flex-col justify-center items-center p-[20px] hover:bg-black/10`}
                        >
                            <div>
                                <img src={item.image} className={`${props.imagewidth} opacity-1 grayscale`}/>
                            </div>
                            <div className="relative bottom-[0.1rem] flex flex-col justify-center items-center">
                                <p className="text-[20px] font-[600] text-[#e6e5e5c0]">{item.title}</p>
                                <p className="text-[#e6e5e5c0] font-[500] text-[16px] text-center">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </section>
                <Outlet />
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

export default Card
