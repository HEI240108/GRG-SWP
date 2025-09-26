# Javascript Frontend 7 Steps (Idea: Rene Wenz)

## 1 Application State Object

- Holds the state of the application
- This is the single source of truth for the application state
- Getter and Setter Methods that allow us to interact with the state

## 2 DOM Node References

- Static references to DOM nodes needed after the start of the application

## 3 DOM Node Creation Functions

- Dynamic creation of DOM nodes needed upon user interaction
- Here we will possibly create a function that will create a new item

## 4 Render Function

- These function will render the application state to the DOM
- Important Takeaway: The state drives the UI, any state change should trigger a re-render of the UI

## 5 Event Handlers

- These functions handle user interaction e.g. button clicks, key presses etc.
- These functions will call the state mutators and then call the render function
- The naming convention for the event handlers is *on\<Event\>*.
- Here we will create a functions that will handle e.g. a "click" event on a button.

## 6 Initial Bindings

- These are the initial bindings of the event handlers, i.e. register the handlers of Pt. 5 with the DOM Node Refs of Pt. 2

## 7 Initial Render

- Here we call the render function (Pt. 4) to render the initial state of the application
