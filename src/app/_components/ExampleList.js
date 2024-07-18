
const ExampleList = ({ items }) => {
    return (
        <ul className="list-disc list-outside pl-10">
          {items.map((item, index) => (
            <li key={index} className="my-2 text-lg text-gray-700">
              {item.sentence}
              <p>{item.translation}</p>
            </li>
          ))}
        </ul>
      );
}

export default ExampleList
