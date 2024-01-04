const initialState = {
    contactList:[],
    keyword:""
};

export default function reducer(state=initialState,action){
  let { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNum: payload.phoneNum },
        ],
      };

    case "SEARCH_BY_USERNAME":
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}