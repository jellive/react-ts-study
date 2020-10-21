import React from 'react'
import { Subject } from 'rxjs'

const index: React.FC = () => {
  const subject = new Subject()
  subject.subscribe(
    item => console.log('next', item),
    (err: Error) => console.error(err),
    () => console.log('a complete')
  )
  subject.next('item')
  subject.next('item2')
  subject.complete()
  return (
    <div>
      <p>넌 큰 일을 해낼 꺼란다.</p>
    </div>
  )
}

export default index
