import { useState } from 'react'
import './App.css'

function App() {
  const [data, addData] = useState(0);
  addData(data.push({
    user_name:"smit",
    description:"description1",

  }))


  return (
    <>
      <div>
            business card:
            name:{name}
      </div>

    </>
  )
}
function addData(){
  
  data.name={name};
  data


}
function renderData(){
  return(
    <div>
      <div>
        business card:
        name:{user_name},
        description:{}
      </div>
    </div>
}

export default App
