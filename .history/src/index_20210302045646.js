import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App=()=>{
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Ram" timeAgo="Today at 4:45PM" content="Nice blog post" />
      </ApprovalCard>
      <CommentDetail author="Shyam" timeAgo="Today at 5:45PM" content="I like the subject" />
      <CommentDetail author="Gita" timeAgo="Today at 6:45PM" content="playing with React" />
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
