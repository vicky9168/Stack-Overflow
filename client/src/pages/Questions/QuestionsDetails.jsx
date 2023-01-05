import React,{useState} from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvotes from "../../assets/sort-up.svg";
import downvotes from "../../assets/sort-down.svg";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import { DisplayAnswer } from "./DisplayAnswer";
import {deleteQuestion, postAnswer, voteQuestion} from '../../actions/question'

const QuestionsDetails = () => {
  const { id } = useParams();
  const questionList = useSelector((state)=>(state.questionsReducer))
const Navigate=useNavigate();
const dispatch=useDispatch();
const [Answer, setAnswer] = useState('')
const User=useSelector((state)=>(state.currentUserReducer));
const location=useLocation();
const url='https://Stack-Overflow-Clone-1.cyclic.app'

const handlePostAns=(e,answerLength)=>{
  e.preventDefault()
  if(User=== null){
    alert('Login or signup to answer a question')
    Navigate('/Auth')
}else {
  if(Answer === ''){
    alert('Enter an answer before submitting')
  } else{
    dispatch(postAnswer({id, noOfAnswers:answerLength+1, answerBody:Answer, userAnswered:User.result.name, userId:User.result._id}))
  }
}

}

const handleShare=()=>{
  copy(url+location.pathname)
  alert('Copied url:'+url+location.pathname)
}

const handleDelete=()=>{
  dispatch(deleteQuestion(id,Navigate))
}

const handleUpVote = ()=>{
  dispatch(voteQuestion(id,'upVote'))
}
const handleDownVote = ()=>{
  dispatch(voteQuestion(id,'downVote'))
}

  return (
    <div className="question-details-page">
      {questionList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList.data.filter((question) => question._id === id).map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upvotes} alt="" width="18" className="votes-icon" onClick={handleUpVote}/>
                      <p>{question.upVote.length + question.downVote.length}</p>
                      <img src={downvotes} alt="" width="18" className="votes-icon" onClick={handleDownVote}/>
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tags) => (
                          <p key={tags}>{tags}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="buttton" onClick={handleShare}>Share</button>
                          {
                            User?.result?._id === question?.userId && (
                              <button type="buttton" onClick={handleDelete}>Delete</button>
                              )
                          }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link to={`/Users/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                            <Avatar backgroundColor='orange' px='8px' py='5px'  color='white' style={{textDecoration:'none'}}>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id}  question={question} handleShare={handleShare}/>
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e) =>{handlePostAns(e,question.answer.length)}}>
                    <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setAnswer(e.target.value)}}></textarea><br />
                    <input type="submit" value="Post Your Answer" className="post-ans-btn"/>
                  </form>
                  <p>
                    Browse other Question tagged
                    {
                      question.questionTags.map((tag)=>(
                        <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                      ))
                    } or 
                    <Link to='/AskQuestion' style={{textDecoration:'none',color:'#009dff'}}> ask your question</Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
