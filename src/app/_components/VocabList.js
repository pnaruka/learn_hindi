import React from 'react'

const VocabList = ({ items }) => {
    return (
        <ol className="list-decimal list-inside pl-4">
          {items.map((item, index) => (
            <li key={index} className="my-2 text-lg text-gray-700">
              {item.word} [{item.reading}] - {item.meaning}
            </li>
          ))}
        </ol>
      );
}

export default VocabList