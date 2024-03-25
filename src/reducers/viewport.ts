import { ViewPort as ViewPortType, SET_VIEW_PORT } from "../constants/viewport";

const initialState: ViewPortType = {
  statusBarHeight: 0,
  menuButtonHeight: 0,
  menuButtonTop: 0,
};

const ViewPort = (state = initialState, action: any) => {
  if (action.type === SET_VIEW_PORT) {
    return { ...state, ...action.viewport };
  }

  return state;
};

export default ViewPort;
