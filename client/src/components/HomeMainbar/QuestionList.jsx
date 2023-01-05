import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionList}) => {
  return (
    <>
        {
            questionList.map((question) => (
                  <Questions question={question} id={question._id} />
                ))
        }
    </>
  )
}

export default QuestionList