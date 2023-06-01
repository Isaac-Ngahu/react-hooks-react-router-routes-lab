import React from "react";
import { directors } from "../data";
// console.log(directors.movies)
function Directors() {
  
  return <div>
<h1>Directors Page</h1>
{directors.map((director)=>{
  return <div key={director.name}>
<h3>Name:{director.name}</h3>
<ul>Movies:{director.movies.map((movie)=>{
 return <li key={movie}>{movie}</li>
})}</ul>
</div>

})}
{/* {directors.map((name)=>{
  return <h3 key={name}>Name: {name}</h3>
})}
<ul>Movies: {directors.movies.map((movie)=>{
  return <li key={movie}>{movie}</li>
})}</ul>
  </div>) */}
</div>
}

export default Directors;
