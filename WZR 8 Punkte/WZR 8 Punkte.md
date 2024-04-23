# Rene Wenz' magisches 8 - Punkte - Programm

1. APPLICATION STATE

- Holds the state of the application
- This is the single source of truth for the application state

2 STATE ACCESSORS/MUTATORS FN'S

- Functions that allow us to get and set the state
- Here we will create functions to interact with the state

3 DOM Node Refs

- Static references to DOM nodes needed after the start of the application

4. DOM Node Creation Fn's

- Dynamic creation of DOM nodes needed upon user interaction
- Here we will possibly create a function that will create a new item

5. RENDER FN

- These functions will render the application state to the DOM
- IMPORTANT TAKEAWAY: The state drives the UI, any state change should trigger a re-render of the UI

6. EVENT HANDLERS

- These functions handle user interaction e.g. button clicks, key presses etc.
- These functions will call the state mutators and then call the render function
- The naming convention for the event handlers is `on<Event>`
- Here we will create a functions that will handle e.g. a "click" event on a button.

7. INIT BINDINGS

- These are the initial bindings of the event handlers, i.e. register the handlers of Pt. 6 with the DOM Node Refs of Pt. 3

8. INITIAL RENDER

- Here will call the render function (Pt. 5) to render the initial state of the application
