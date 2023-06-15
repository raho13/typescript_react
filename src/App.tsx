import { useEffect, useState } from 'react'


function App() {
  type item = {
    value?: string
    index: number,
  }
  const [todos, setTodos] = useState<string[]>([])
  const [todo, setTodo] = useState<string>("")
  const [editedItem, setEditedItem] = useState<item>({ index: 0 })
  const deleteItem = (i: number) => {
    let arr: string[] = [...todos]
    arr.splice(i, 1)
    setTodos(arr)
  }
  const addTodo = () => {
    setTodos([...todos, todo])
    setTodo("")
  }
  const editTodo = (data: string, i: number) => {
    setTodo(data)
    setEditedItem({ value: data, index: i })
  }
  const submitEditedArray = () => {
    let updatedArray: string[] = [...todos]
    updatedArray[editedItem.index!] = todo
    setTodos(updatedArray)
  }
  useEffect(() => {
    console.log("todolar deyisdi")
  }, [todos])
  return (
    <>
      add todo
      <br />
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button onClick={addTodo}>add</button>
      <button onClick={submitEditedArray}>edit</button>
      <ul>

        {todos.map((todo: string, i) => {
          return <li key={i}>{todo} <span><a href="#" onClick={() => {
            deleteItem(i)
          }}>sil</a></span> <span onClick={() => { editTodo(todo, i) }}>edit</span>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
