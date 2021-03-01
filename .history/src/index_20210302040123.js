import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

const App=()=>{
  return (
    <div className="ui container comments">
      <CommentDetail author="Ram"/>
      <CommentDetail author="Shyam"/>
      <CommentDetail author="Gita"/>
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
