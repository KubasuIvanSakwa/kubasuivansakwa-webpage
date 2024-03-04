import { useParams } from "react-router-dom"
import Pageheader from "./Pageheader"

/*
    tomorrow
    --> fix the css of hero page to be centered in the middle
    --> add this section when skill button clicked
*/
function Description() {

    const { idno } = useParams()

    return (
        <section>
            <button>
                back
            </button>
            <section>
                <Pageheader 
                    subTitle={`${idno}`}
                />
            </section>
        </section>
    )
}

export default Description
