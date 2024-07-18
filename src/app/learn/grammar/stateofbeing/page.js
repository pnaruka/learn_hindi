import ExampleList from "@/app/_components/ExampleList"
import VocabList from "@/app/_components/VocabList"

const StateOfBeing = () => {
    const vocabulary = ["इंसान [insaan] - human", "सुंदर [sundar] - beautiful", "ठीक [theek] - okay/alright", "नहीं [nahin] - no/not"]
    const presentPosEg = [{sentence: <><span title="insaan - human" className="popup">इंसान</span> <em>है</em> ।</>, translation:"Is human."},
        {sentence: <><span title="sundar - beautiful" className="popup">सुंदर</span> <em>है</em> ।</>, translation:"Is beautiful."},
        {sentence: <><span title="theek - okay/alright" className="popup">ठीक</span> <em>है</em> ।</>, translation:"Is okay."}
    ]
    const presentNegEg = [{sentence: <><span title="insaan - human" className="popup">इंसान</span> <em>नहीं है</em> ।</>, translation:"Is not human."},
        {sentence: <><span title="sundar - beautiful" className="popup">सुंदर</span> <em>नहीं है</em> ।</>, translation:"Is not beautiful."},
        {sentence: <><span title="theek - okay/alright" className="popup">ठीक</span> <em>नहीं है</em> ।</>, translation:"Is not okay."}
    ]
    const pastEg = [{sentence: <><span title="insaan - human" className="popup">इंसान</span> <em>था</em> ।</>, translation:"Was human."},
        {sentence: <><span title="sundar - beautiful" className="popup">सुंदर</span> <em>नहीं था</em> ।</>, translation:"Was not beautiful."},
        {sentence: <><span title="theek - okay/alright" className="popup">ठीक</span> <em>था</em> ।</>, translation:"Was okay."}
    ]
    return (
        <div className="main-body container">
            <h1 className="text-3xl font-bold">Expressing state-of-being</h1>
            <div className="present-positive p-4">
                <h3 className="text-xl font-medium">Declaring something is so and so using "है"</h3>
            <div className="vocab container mx-auto p-2">
                <h4 className="vocab-head text-xl font-bold mb-4">Vocabulary</h4>
                    <VocabList className="vocab-body" items={vocabulary} />
            </div>
            <div className="explanation">
                <p>To say that something is, add है after the noun or adjective.</p>
            </div>
            <div className="examples container mx-auto p-2">
                <h4 className="examples-head text-xl font-bold mb-4">Examples</h4>
                <ExampleList className="examples-body" items={presentPosEg} />
                <div>Note that 'है' is used only for the 2nd and 3rd person singular (you/he/she/that/it) in informal contexts.</div>
            </div>
            </div>
            <div className="present-negative p-4">
                <h3 className="text-xl font-medium">Conjugating to the negative state-of-being</h3>
                <div className="explanation m-2"> To make it negative just add नहीं before है.</div>
            <div className="examples container mx-auto p-2">
                <h4 className="examples-head text-xl font-bold mb-4">Examples</h4>
                <ExampleList className="examples-body" items={presentNegEg} />
            </div>
            </div>
            <div className="past p-4">
                <h3 className="text-xl font-medium">Conjugating to the past state-of-being using "था"</h3>
            <div className="explanation m-2"> To say that 'it was' just replace है with था. </div>
            <div className="examples container mx-auto p-2">
                <h4 className="examples-head text-xl font-bold mb-4">Examples</h4>
                <ExampleList className="examples-body" items={pastEg} />
            </div>
            </div>
        </div>
    )
}

export default StateOfBeing
