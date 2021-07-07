1. What problem does the context API help solve?

Context API allows you to take your state out and deliver it directly to components that use it so you do not have to prop drill

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: actions are functions that reducers use
reducers: reducers help by combining states
store: store is your globally loaded state

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is globally loaded state and component state is state that is loaded in components, when a state is used in many components it is better to use application state, when it is only used in a few components then component state is better

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is a middleware that allows you to write actions wth nested functions

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, it makes more sense to me
