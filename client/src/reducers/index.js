import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

//this sets the name on the "state" to auth.
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
});
