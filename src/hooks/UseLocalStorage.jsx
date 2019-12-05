import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem("key");
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

// - We're going to set up some state here. Set up a state
// property called storedValue.
//   - This state property is going to take a function as
// it's initial value. When we do this, whatever that
// callback function returns is what gets set as the
// intialValue for the state property.
//   - In the callback function, we'll check to see if the
//  item we passed in already exists in localStorage, and
//   return that value, otherwise we'll return whatever
//    initialValue was passed in.
//   - Quick note, if you pass in arrays or objects to
// localStorage, you will need to parse it into JSON.
// Then when you retrieve it, like we do below,
// you'll need to parse it back into regular JavaScript.
// // To retrieve an item from localStorage, call localStorage.getItem('itemName')
// // If that item doesn't exist, it will return undefined
// const [storedValue, setStoredValue] = useState(() => {
//   // Get from local storage by key
//   const item = window.localStorage.getItem(key);
//   // Parse and return stored json or, if undefined, return initialValue
//   return item ? JSON.parse(item) : initialValue;
// });
// ```

// - Now, let's return `storedValue` from this hook in an array:

// ```js
// import { useState } from "react";

// export const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : initialValue;
//   });

//   return [storedValue];
// };
// ```

// - Remember we're trying to use this hook like this:
// `const [name, setName] = useLocalStorage('name', 'Dustin')`.
//  So far we have made the value part of the hook, but not the setter.
//  Let's go ahead and create a setter function,
//  and return that in the array as well.
//   - inside the hook, write a function called `setValue` that takes a `value` parameter
//   - In `setValue`, set the `value` to localStorage using the `key` that
//  was passed into the hook itself
//   - Also, update the state of `storedValue` with `value` as well
//   - Add `setValue` to the array that is being returned out of this hook
//   - `setValue` should look something like this:

// ```js
// const setValue = value => {
//   // Save state
//   setStoredValue(value);
//   // Save to local storage
//   window.localStorage.setItem(key, JSON.stringify(value));
// };
// ```

// We're going to use this inside our dark mode hook,
// but this can be used anywhere for any kind of
//  localStorage needs you have in your apps.
//  Custom hooks are so awesome!!
