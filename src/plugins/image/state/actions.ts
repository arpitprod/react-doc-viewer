// SET_ZOOM_LEVEL
export const SET_ZOOM_LEVEL = "SET_ZOOM_LEVEL";
export interface SetZoomLevel {
  type: typeof SET_ZOOM_LEVEL;
  value: number;
}
export const setZoomLevel = (value: number): SetZoomLevel => ({
  type: SET_ZOOM_LEVEL,
  value,
});

export type ImageActions =
  | SetZoomLevel;
