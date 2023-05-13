const { useState } = React

export function LongTxt({ txt, length = 100 }) {
  const [showFullText, setShowFullText] = useState(false)

  function handleClick() {
    setShowFullText((prevState) => !prevState)
  }

  function getTxtToShow() {
    return showFullText ? txt : txt.slice(0, 100)
  }

  return (
    <div>
      <span>{getTxtToShow()}</span>
      {txt.length > length && (
        <button onClick={() => handleClick()}>
          {showFullText ? 'Read Less' : 'Read more'}
        </button>
      )}
    </div>
  )
}
