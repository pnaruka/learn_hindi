
const StateOfBeing = () => {
    return (
        <div className="main-body">
            <h3>Expressing state-of-being</h3>
            <div className="present-positive">
                <h3>Declaring something is so and so using "है"</h3>
            <div className="vocab">
                <h4 className="vocab-head">Vocabulary</h4>
                <div className="vocab-body">
                    <ol>
                        <li> इंसान [insaan] - human</li>
                        <li> सुंदर [sundar] - beautiful</li>
                        <li> ठीक [theek] - okay/alright</li>
                        <li> नहीं [nahin] - no/not</li>
                    </ol>
                </div>
            </div>
            <div className="explanation"></div>
            <div className="examples">
                <h4 className="examples-head">Examples</h4>
                <ol>
                    <li>
                        <span title="insaan - human" class="popup">इंसान</span> <em>है</em> ।
                        <br />
                        Is human.
                    </li>
                    <li>
                        <span title="sundar - beautiful" class="popup">सुंदर</span> <em>है</em> ।
                        <br />
                        Is beautiful.
                    </li>
                    <li>
                        <span title="theek - okay/alright" class="popup">ठीक</span> <em>है</em> ।
                        <br />
                        Is okay.
                    </li>
                </ol>
                <div>Note that 'है' is used only for the 2nd and 3rd person singular (you/he/she/that/it) in informal contexts.</div>
            </div>
            </div>
            <div className="present-negative">
                <h3>Conjugating to the negative state-of-being</h3>
                <div className="explanation"> To make it negative just add नहीं before है.</div>
            <div className="examples">
                <h4 className="examples-head">Examples</h4>
                <ol>
                    <li>
                        <span title="insaan - human" class="popup">इंसान</span> <em>नहीं है</em> ।
                        <br />
                        Is not human.
                    </li>
                    <li>
                        <span title="sundar - beautiful" class="popup">सुंदर</span> <em>नहीं है</em> ।
                        <br />
                        Is not beautiful.
                    </li>
                    <li>
                        <span title="theek - okay/alright" class="popup">ठीक</span> <em>नहीं है</em> ।
                        <br />
                        Is not okay.
                    </li>
                </ol>
            </div>
            </div>
            <div className="past">
                <h3>Conjugating to the past state-of-being using "था"</h3>
            <div className="explanation"> To say that 'it was' just replace है with था. </div>
            <div className="examples">
                <h4 className="examples-head">Examples</h4>
                <ol>
                    <li>
                        <span title="insaan - human" class="popup">इंसान</span> <em>था</em> ।
                        <br />
                        Was human.
                    </li>
                    <li>
                        <span title="sundar - beautiful" class="popup">सुंदर</span> <em>नहीं था</em> ।
                        <br />
                        Was not beautiful.
                    </li>
                    <li>
                        <span title="theek - okay/alright" class="popup">ठीक</span> <em>था</em> ।
                        <br />
                        Was okay.
                    </li>
                </ol>
            </div>
            </div>
        </div>
    )
}

export default StateOfBeing
