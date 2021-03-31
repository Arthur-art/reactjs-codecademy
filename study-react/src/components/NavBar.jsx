import React from 'react'

export default class NavBar extends React.Component {
    render() {
      const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
      const navLinks = pages.map((value,i)=>{
          return <a href="https://www.codecademy.com/courses/react-101/lessons/this-props/exercises/access-props" target="_blanck" key={i} >{pages[i]}</a>
      })
  
      return <nav>{navLinks}</nav>;
    }
  }