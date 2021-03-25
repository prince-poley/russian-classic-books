import { Categories, SortPopup, AuthorItem } from "../components";

export default function Home({ authors }) {
  return (
    <div className="wrapper">
      <div className="d-flex jutify-content-between mt-20">
        <Categories items={["Достоевский", "Шолохов", "Тургенев"]} />
        <SortPopup items={[{name: "популярности", type: "popular"}, {name: "алфавиту", type: "alphabet"}]} />
      </div>
      
      <h1 className="mt-20">Все авторы</h1>
      
      <div className="authors mt-20">
        {
          authors?.map(author => {
            return (
              <AuthorItem key={author.id} {...author} />
            )
          })
        }
      </div>
    </div>
  )
}