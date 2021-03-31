import React from 'react'

export default class NavBar extends React.Component {
    render() {
      const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
      const navLinks = pages.map((value,i)=>{
          return <a href="#">{pages[i]}</a>
      })
  
      return <nav>{navLinks}</nav>;
    }
  }