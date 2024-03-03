import Card from "../Card"
import reactImg from '/src/assets/mutable-logo.svg'

function Experience() {
    const experience = [
        {id: 1, title: 'Mutable Tech', image: `${reactImg}`, description: 'A startup that is built around making software solutions affordable'},
    ]

    return (
        // <section>
        //             <h4>Mutable Tech</h4>
        //             <p>A startup that is built around making software solutions affordable</p>
        //         </div>
        //         <div>
        //             <div>
        //                 <h3>Role:</h3>
        //                 <p>Front-end Developer</p>
        //             </div>
        //             <div>
        //                 <h3>Key contributions</h3>
        //                 <ul>
        //                     <li>Drafting software solutions</li>
        //                     <li>Working on React and Tailwind code bases for the frontend</li>
        //                     <li>Writing tests</li>
        //                     <li>Debugging software code</li>
        //                     <li>Managing and updating companies code base on GitHub</li>
        //                     <li>
        //                         Worked with backend developers 
        //                         to implement API’s and Databases to the Client side
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <Card 
            idName={'experience'}
            title={'EXPERIENCE'}
            subTitle={'Where I Worked, And Projects Done'}
            identifier={experience}
            imagewidth={'w-[6rem]'}
            cardsheight={'h-[17rem]'}
            grid={'repeat(auto-fit, 20rem)'}
        />
    )
}

export default Experience
