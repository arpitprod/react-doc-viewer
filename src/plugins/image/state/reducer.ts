import {
  ImageActions as ImageStateActions,
  SetZoomLevel,
  SET_ZOOM_LEVEL,
} from "./actions";
import { IMainState } from "../../../state/reducer";

export type IImageState = {
  zoomLevel: number;
  mainState?: IMainState;
};

export const initialImageState: IImageState = {
  zoomLevel: 1,
};

export type ImageStateReducer = (
  state: IImageState,
  action: ImageStateActions
) => IImageState;

export const reducer: ImageStateReducer = (
  state = initialImageState,
  action: ImageStateActions
): IImageState => {
  switch (action.type) {
    case SET_ZOOM_LEVEL: {
      const { value } = action as SetZoomLevel;

      return { ...state, zoomLevel: value };
    }

    default:
      return state;
  }
};
