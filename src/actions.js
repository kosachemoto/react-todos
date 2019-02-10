export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = [
  {
    id: "499994cb-fce3-4ada-a9ca-30ce14f92636",
    name: "SHOW_ALL",
    path: "all",
    title: "Show All"
  },
  {
    id: "bac531db-9d0c-4a04-b9ee-454f37984a4a",
    name: "SHOW_COMPLETED",
    path: "completed",
    title: "Show Completed"
  },
  {
    id: "a38a80de-ff06-4fe8-a690-93d502180ba7",
    name: "SHOW_ACTIVE",
    path: "active",
    title: "Show Active"
  }
]

export function addTodo(text) {
  return {
    type: ADD_TODO, 
    text
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}