
import ExampleList from "@/app/_components/ExampleList"
import VocabList from "@/app/_components/VocabList"

const StateOfBeing = () => {
    const vocab = [{word:'इंसान', reading:'insaan', meaning:'human'},
        {word:'सुंदर', reading:'sundar', meaning:'beautiful'},
        {word:'ठीक', reading:'theek', meaning:'okay/alright'},
        {word:'पागल', reading:'paagal', meaning:'crazy/mad'},
        {word:'नहीं', reading:'nahin', meaning:'no/not'},
        {word:'होना', reading:'hona', meaning:'to be/to become'}
    ];
    
    const presentPosEg = [{ sentence: <><span title="insaan - human" className="popup">इंसान</span> <em>है</em> ।</>, translation: "(He/She/That/It) is human." },
    { sentence: <><span title="sundar - beautiful" className="popup">सुंदर</span> <em>हैं</em> ।</>, translation: "(We/They/You) are beautiful." },
    { sentence: <><span title="theek - okay/alright" className="popup">ठीक</span> <em>हूँ</em> ।</>, translation: "(I) am okay." },
    { sentence: <><span title="paagal - crazy/mad" className="popup">पागल</span> <em>हो</em> ।</>, translation: "(You) are crazy." }
    ]
    const presentNegEg = [{ sentence: <><span title="insaan - human" className="popup">इंसान</span> <em>नहीं हो</em> ।</>, translation: "(You) are not human." },
    { sentence: <><span title="sundar - beautiful" className="popup">सुंदर</span> <em>नहीं है</em> ।</>, translation: "(He/She/That/It) is not beautiful." },
    { sentence: <><span title="theek - okay/alright" className="popup">ठीक</span> <em>नहीं हूँ</em> ।</>, translation: "(I) am not okay." },
    { sentence: <><span title="paagal - crazy/mad" className="popup">पागल</span> <em>नहीं हैं</em> ।</>, translation: "(We/They/You) are not crazy." }
    ]
    const pastEg = [{ sentence: <><span title="insaan - human" className="popup">इंसान</span> <em>था</em> ।</>, translation: "I/He/It/That (m.) was human." },
    { sentence: <><span title="sundar - beautiful" className="popup">सुंदर</span> <em>नहीं थी</em> ।</>, translation: "I/She/It/That (f.) was not beautiful." },
    { sentence: <><span title="theek - okay/alright" className="popup">ठीक</span> <em>थे</em> ।</>, translation: "We/They/You (m.) were okay." },
    { sentence: <><span title="paagal - crazy/mad" className="popup">पागल</span> <em>नहीं थीं</em> ।</>, translation: "(We/They/You) (f.) were not crazy." }
    ]
    return (
        <div className="page-body">
            <h1 className="page-heading">Expressing state-of-being</h1>
            <div className="present-positive section">
                <h3 className="section-heading">Expressing "to be" with different conjugations of verb "होना"</h3>
                <div className="vocab sub-section">
                    <h4 className="vocab-head sub-section-heading">Vocabulary</h4>
                    <VocabList className="vocab-body" items={vocab} />
                </div>
                <div className="rules">
                    <p>To say that <em>'He/She/That/It</em> is', add <em>है</em> after the noun or adjective.</p>
                    <p>For <em>'I</em> am', add <em>हूँ</em>.</p>
                    <p>For <em>'You</em> are', add <em>हो</em>.</p>
                    <p>For <em>'We/They/You(pl.)</em> are', add <em>हैं</em>.</p>
                </div>
                <div className="examples sub-section">
                    <h4 className="examples-head sub-section-heading">Examples</h4>
                    <ExampleList className="examples-body" items={presentPosEg} />
                </div>
                <div className="note-sec">
                    Note: We are ignoring the pronouns in this section to focus on the verb "to be".
                </div>
            </div>
            <div className="present-negative section">
                <h3 className="section-heading">Conjugating to the negative state-of-being</h3>
                <div className="rules"> To make it negative just add <em>नहीं</em> before the variation of "होना".</div>
                <div className="examples sub-section">
                    <h4 className="examples-head sub-section-heading">Examples</h4>
                    <ExampleList className="examples-body" items={presentNegEg} />
                </div>
            </div>
            <div className="past section">
                <h3 className="section-heading">Conjugating to the past state-of-being</h3>
                <div className="rules">
                    <p>To say that <em>'I/He/It/That (m.)</em> was', add <em>था</em>.</p>
                    <p>For <em>'I/She/It/That (f.)</em> was', add <em>थी</em>.</p>
                    <p>For <em>'We/They/You(pl.)/You (m.)</em> were', add <em>थे</em>.</p>
                    <p>For <em>'We/They/You(pl.)/You (f.)</em> were', add <em>थीं</em>.</p>
                </div>
                <div className="examples sub-section">
                    <h4 className="examples-head sub-section-heading">Examples</h4>
                    <ExampleList className="examples-body" items={pastEg} />
                </div>
                <div className="note-sec">
                    In short:
                    <p>singular masculine: था</p>
                    <p>singular feminine: थी</p>
                    <p>plural masculine: थे</p>
                    <p>plural feminine: थीं</p>
                    <p><em>You</em> is an exception, it follows the plural case for both singular and plural.</p>
                </div>
            </div>
        </div>
    )
}

export default StateOfBeing
