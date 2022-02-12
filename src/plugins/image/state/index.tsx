import React, { createContext, Dispatch, FC, useReducer } from "react";
import { ImageActions } from "./actions";
import {
  initialImageState,
  IImageState,
  ImageStateReducer,
  reducer,
} from "./reducer";
import { IMainState } from "../../../state/reducer";

const ImageContext = createContext<{
  state: IImageState;
  dispatch: Dispatch<ImageActions>;
}>({ state: initialImageState, dispatch: () => null });

const ImageProvider: FC<{ mainState: IMainState }> = ({
  children,
  mainState,
}) => {
  const [state, dispatch] = useReducer<ImageStateReducer>(reducer, {
    ...initialImageState,
    mainState,
  });

  return (
    <ImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
