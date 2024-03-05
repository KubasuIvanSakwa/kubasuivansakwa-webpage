import reactImg from '../assets/react.svg'
import jsImg from '../assets/js.svg'
import pyImg from '../assets/python.svg'
import tailwindImg from '../assets/tailwind.svg'
import Card from './Card'

function Skills() {
    const skills = [
        {id: 1, title: 'React', image: `${reactImg}`},
        {id: 2, title: 'Tailwind', image: `${tailwindImg}`},
        {id: 3, title: 'Javascript', image: `${jsImg}`},
        {id: 4, title: 'Python', image: `${pyImg}`},
    ]
    return (
        <Card 
            idName={'skills'}
            title={'SKILLS'}
            subTitle={'Skills I Have Aquired So Far'}
            identifier={skills}
            imagewidth={'w-[3rem]'}
            cardsheight={'h-[13rem]'}
            grid={'repeat(auto-fit, 12rem)'}
        />
    )
}

export default Skills
