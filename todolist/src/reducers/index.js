const initState = {
  filter: "SHOW_TODO",
  tasks: [
    { name: "acheter pizza", isDone: true },
    { name: "boire ma bière", isDone: false }
  ]
};
export default function(state = initState, action) {
  switch (action.type) {
    case "UPDATE_TASKS_STATUS":
      return {
        ...state,
        tasks: [
          { name: "acheter pizza", isDone: action.isDone },
          { name: "boire ma bière", isDone: action.isDone }
        ]
      };

    case "UPDATE_FILTER":
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}
