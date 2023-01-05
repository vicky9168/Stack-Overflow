import React from "react";
import "./HomeMainbar.css";
import { useLocation } from "react-router-dom";
// import { Link, useLocation } from "react-router-dom";
// import Questions from './Questions'
import QuestionList from "./QuestionList";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";


const HomeMainbar = () => {
  // var questionList = [
  //   {
  //     _id: 1,
  //     votes: 3,
  //     upVotes:3,
  //     downVotes:2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongoDB"],
  //     userId:1,
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: 2,
  //     votes: 0,
  //     upVotes:3,
  //     downVotes:2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "A", "python"],
  //     userId:1,
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: 3,
  //     votes: 1,
  //     upVotes:3,
  //     downVotes:2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "A", "python"],
  //     userId:1,
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  // ];
  const questionList = useSelector((state)=>(state.questionsReducer))
  // console.log(QuestionList);
  const user =12;
    const navigate=useNavigate()
    // const redirect=()=>{
    //     alert("Login or Signup to ask a question")
    //     navigate('/Auth')
    // }
    // Or
    const checkAuth=()=>{
      if(user === null){
        alert("Login or Signup to ask a questions")
        navigate('/Auth')
      } else {
        navigate('/AskQuestion')
      }
    }
  const location = useLocation();
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        {/* <Link to={ user === null ? redirect():'/AskQuestion'} className="ask-btn">
          Ask Questions
        </Link> */}
        <button onClick={checkAuth} className="ask-btn"> Ask Questions</button>
      </div>
      <div>
        {questionList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.data.length} questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        )}
      </div>
    </div>
  );
}

export default HomeMainbar;
