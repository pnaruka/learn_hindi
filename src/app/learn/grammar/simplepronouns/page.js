import ExampleList from "@/app/_components/ExampleList";
import VocabList from "@/app/_components/VocabList";

const SimplePronoun = () => {
  const vocab = [{ word: 'लडका', reading: 'ladka', meaning: 'boy' },
  { word: 'दोस्त', reading: 'dost', meaning: 'friend' },
  { word: 'लेखक', reading: 'lekhak', meaning: 'writer' },
  { word: 'मज़बूत', reading: 'mazboot', meaning: 'strong' },
  { word: 'नर्स', reading: 'nurse', meaning: 'nurse' },
  { word: 'सुंदर', reading: 'sundar', meaning: 'beautiful' },
  { word: 'कलाकार', reading: 'kalaakaar', meaning: 'artist' }
  ];
  const firstPersEgs = [{ sentence: <><em>मैं</em> <span title="ladka - boy" className="popup">लडका</span> हूँ ।</>, translation: "I am (a) boy." },
  { sentence: <><em>हम</em> <span title="dost - friend" className="popup">दोस्त</span> हैं ।</>, translation: "We are friends." },
  { sentence: <><em>मैं</em> <span title="nurse - nurse" className="popup">नर्स</span> थी ।</>, translation: "I was (a) nurse." }
  ];
  const secPersEgs = [{ sentence: <><em>तुम</em> <span title="sundar - beautiful" className="popup">सुंदर</span> हो ।</>, translation: "You are beautiful." },
  { sentence: <><em>तुम</em> <span title="kalaakaar - artist" className="popup">कलाकार</span> हो ।</>, translation: "You are (an) artist." },
  { sentence: <><em>तुम</em> <span title="mazboot - strong" className="popup">मज़बूत</span> थे ।</>, translation: "You were strong." }
  ];
  const thirdPersEgs = [{ sentence: <><em>ये</em> <span title="lekhak - writer" className="popup">लेखक</span> है।</>, translation: "He/She is (a) writer." },
    { sentence: <><em>वो</em> <span title="sundar - beautiful" className="popup">सुंदर</span> हैं ।</>, translation: "They are beautiful." },
    { sentence: <><em>ये</em> <span title="kalaakaar - artist" className="popup">कलाकार</span> थी ।</>, translation: "She was (an) artist." },
    { sentence: <><em>वो</em> <span title="mazboot - strong" className="popup">मज़बूत</span> था ।</>, translation: "He was strong." }
    ];
  return (
    <div className='page-body'>
      <h1 className='page-heading'>Simple Pronouns</h1>
      <div className='first-person section'>
        <h1 className='section-heading'>First person pronouns(I/We)</h1>
        <div className='vocab sub-section'>
          <h1 className='sub-section-heading'>Vocabulary</h1>
          <VocabList items={vocab} />
        </div>
        <div className="rules">
          <p><em>मैं</em> - I</p>
          <p><em>हम</em> - We</p>
          <p>Hindi mostly follows the sentence structure Subject-Object-Verb.</p>
          <p>When compared to English it would be like:</p>
          <em>I a boy am.</em>
        </div>
        <div className='examples sub-section'>
          <h1 className='sub-section-heading'>Examples</h1>
          <ExampleList items={firstPersEgs} />
        </div>
        <div className="note-sec">
          <p>Note: In Hindi there are no equivalents of the English articles a, an, the.</p>
        </div>
      </div>
      <div className="sec-person section">
        <h1 className="section-heading">Second person pronouns(You)</h1>
        <div className="rules">
          <p><em>तुम</em> - You</p>
        </div>
        <div className='examples sub-section'>
          <h1 className='sub-section-heading'>Examples</h1>
          <ExampleList items={secPersEgs} />
        </div>
      </div>
      <div className="third-person section">
        <h1 className="section-heading">Third person pronouns(He/She/They/This/That/It)</h1>
        <div className="rules">
          <p>All of the 3rd person pronouns are expressed with 2 words:</p>
          <p><em>ये</em> - When the 3rd person is close.</p>
          <p><em>वो</em> - When the 3rd person is far.</p>
        </div>
        <div className='examples sub-section'>
          <h1 className='sub-section-heading'>Examples</h1>
          <ExampleList items={thirdPersEgs} />
        </div>
      </div>
    </div>
  )
}

export default SimplePronoun
