import arrowdown from '../assets/arrowdown.svg'
function ArrowDown() {
    return (
        <a href="#skills" className="inline-block w-[1.2rem] h-[10rem] overflow-hidden">
            <img src={arrowdown} className='arrow-down w-4'/>
        </a>
    )
}

export default ArrowDown
