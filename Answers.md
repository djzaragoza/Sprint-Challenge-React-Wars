# Answers

1.  What is React JS and what problems does it try and solve?
ReactJS is a JavaScript library for building user interfaces for single page apps.  The main purpose of Reactjs is to be fast, scalable, and simple, when building user interfaces.  it allows developers to create reusable UI components.  Also, developers can create large web applications which can change data, without reloading the browser.

1.  What does it mean to _think_ in react?
When building a single page application, to "think" in react is to first have a plan, a thought process.  First, break down the UI into components.  that is what react is all about, components.  draw boxes around every component and sub components in the design file provided by the designer (assuming one was provided) and name them.  Next, build a static version.  Then, identify the minimal rep of UI state, which means to make the UI interactive and functional, you need to make the changes to your model.  React makes it easy for developers with state.  Then, identify where your state should live.  Lastly, add inverse data flow.  What this basically means is to make your code understandable and readable. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Class components:
    -class components provide more features
    -you need to use "extend" to React.Component
Stateful components:
    -has a state initialized in the constructor
    -uses setState method to update the state

Functional components:
    -also known as "stateless" component
    -plain JS function that takes props as an argument and returns a react element
Presentational component:
    -renders HTML
    -only use is to provide presentational markup


1.  Describe state.
      State is an object that represents the parts/components of the app that can change.  


1.  Describe props.
      Props are components that can be customized when they are created with different parameters.
