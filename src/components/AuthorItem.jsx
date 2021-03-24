import { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
            ? popularBooks.map(book => <div key={book.id} >- { book.title }</div>)
            : <div>Данный раздел еще не заполнен</div>
          }
        </div>
      </div>
    </div>
  )
}

AuthorItem.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  facts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  popularBooks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }))
}