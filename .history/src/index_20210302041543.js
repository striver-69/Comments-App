import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App=()=>{
  return (
    <div className="ui container comments">
      <CommentDetail author="Ram" timeAgo="Today at 4:45PM" content="Nice blog post" avatar={faker.image.avatar()}/>
      <CommentDetail author="Shyam" timeAgo="Today at 5:45PM" content="I like the subject" avatar={faker.image.avatar()}/>
      <CommentDetail author="Gita" timeAgo="Today at 6:45PM" content="playing with React" avatar={faker.image.avatar()}/>
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))
