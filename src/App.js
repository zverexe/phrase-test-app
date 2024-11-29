import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const getData = () => {
    const url =
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/727562";

    setIsLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.text();
      })
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <List word={data} />
    </div>
  );
}

function List({ word }) {
  const [lettersToShow, setLettersToShow] = useState([]);

  useEffect(() => {
    if (lettersToShow.length < word.length) {
      const timer = setTimeout(() => {
        setLettersToShow((prevLetters) =>
          prevLetters.concat(word[prevLetters.length])
        );
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [lettersToShow, word]);

  return (
    <ul>
      {lettersToShow.map((letter, index) => (
        <li key={`${letter}${index}`}>{letter}</li>
      ))}
    </ul>
  );
}

// Bonus: script that parses DOM to get full URL
// let urlCharacters = [];
// document.querySelectorAll('code[data-class^="23"]').forEach(code => {
//   const div = code.querySelector('div[data-tag$="93"]');
//   if (div) {
//     const span = div.querySelector('span[data-id*="21"]');
//     if (span) {
//       const charElement = span.querySelector('i.char');
//       if (charElement && charElement.getAttribute('value')) {
//         urlCharacters.push(charElement.getAttribute('value'));
//       }
//     }
//   }
// });

// const url = urlCharacters.join('');
// console.log(url);
