import { useEffect, useState } from "react"

export default function AuthorItem({ photo, name, facts, popularBooks }) {
  
  const [interestingFacts, setInterestingFacts] = useState(facts[0]);

  useEffect(() => {
    setInterestingFacts(facts[Math.floor(Math.random() * Math.floor(facts.length))])
  }, [])

  return (
    <div className="author">
      
      <div className="author-name mt-5">
        <h2>{ name }</h2>
      </div>
      <div className="author-image mt-5">
        <img src={ photo } alt={ name } />
      </div>
      <div className="interesting-facts mt-10">
        <h3>❓ Случайный факт:</h3>
        <div className="mt-5">{ interestingFacts.title }</div>
      </div>
      <div className="author-popular-books mt-10">
        <h3>📕 Популярные книги:</h3>
        <div className="mt-5">
          {
            popularBooks.length > 0 
            ? popularBooks.map(book => <div>- { book.title }</div>)
            : <div>Данный раздел еще не заполнен</div>
          }
        </div>
      </div>
    </div>
  )
}
