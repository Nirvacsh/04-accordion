import { useState } from 'react'
import data from './data.js'
import Questions from './Questions.jsx'
const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    const newActiveId = activeId === id ? null : id
    setActiveId(newActiveId)
  }
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}
export default App
