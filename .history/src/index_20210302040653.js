import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

const App=()=>{
  return (
    <div className="ui container comments">
      <CommentDetail author="Ram" timeAgo="Today at 4:45PM"/>
      <CommentDetail author="Shyam" timeAgo="Today at 5:45PM"/>
      <CommentDetail author="Gita" timeAgo="Today at 6:45PM"/>
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
