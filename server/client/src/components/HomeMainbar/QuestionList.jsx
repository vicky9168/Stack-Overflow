import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionList}) => {
  return (
    <div>
        {
            questionList.map((question) => (
                  <Questions question={question} key={question._id} />
                ))
        }
    </div>
  )
}

export default QuestionList