import React from "react";

const Display = (props) => {
  console.log('props', props)

  //you want this as a function instead of just a variable
  //so that you can call it when you want to
  const {dogs} = props
  console.log('dogs', {dogs})

  //wrapped the jsx in a loaded function so that it will render only once it has the data, otherwise returns 'Loading...' message
  const loaded = () => (
    <div style={{textAlign: "center"}}>
      {dogs.map(dog => (
        <article>
          <img src={dog.img}/>
          <h1>{dog.name}</h1>
          <h3>{dog.age}</h3>
          <button onClick={() => {
            props.selectDog(dog)
            props.history.push("/edit")
          }}>Edit</button>
          <button onClick={() => {
            props.deleteDog(dog)
          }}>Delete</button>
        </article>
      ))}
      </div>
  )
  return dogs.length > 0 ? loaded():
  <h1>Loading....</h1>;
};

export default Display;
