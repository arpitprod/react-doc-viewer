import React, { FC, useContext } from "react";
import styled from "styled-components";
import {
  DownloadImageIcon,
  ResetZoomImageIcon,
  ZoomInImageIcon,
  ZoomOutImageIcon,
} from "./icons";
import { Button, LinkButton } from "../../../components/common";
import { IStyledProps } from "../../../types";
import { getFileName } from '../../../utils/getFileName';
import { ImageContext } from "../state";
import { setZoomLevel } from "../state/actions";
import { initialImageState } from "../state/reducer";

const ImageControls: FC<{}> = () => {
  const {
    state: { mainState, zoomLevel },
    dispatch,
  } = useContext(ImageContext);

  const currentDocument = mainState?.currentDocument || null;

	const fileName = getFileName(mainState?.config, mainState?.currentDocument);

  return (
    <Container id="pdf-controls">

      {currentDocument?.fileData && (
        <DownloadButton
          id="pdf-download"
          href={currentDocument?.fileData as string}
          download={fileName}
        >
          <DownloadImageIcon color="#000" size="75%" />
        </DownloadButton>
      )}

      <ControlButton
        id="pdf-zoom-out"
        onMouseDown={() => dispatch(setZoomLevel(zoomLevel - 0.1))}
      >
        <ZoomOutImageIcon color="#000" size="80%" />
      </ControlButton>

      <ControlButton
        id="pdf-zoom-in"
        onMouseDown={() => dispatch(setZoomLevel(zoomLevel + 0.1))}
      >
        <ZoomInImageIcon color="#000" size="80%" />
      </ControlButton>

      <ControlButton
        id="pdf-zoom-reset"
        onMouseDown={() => dispatch(setZoomLevel(initialImageState.zoomLevel))}
        disabled={zoomLevel === initialImageState.zoomLevel}
      >
        <ResetZoomImageIcon color="#000" size="70%" />
      </ControlButton>

    </Container>
  );
};

export default ImageControls;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(props: IStyledProps) => props.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const ControlButton = styled(Button)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const DownloadButton = styled(LinkButton)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
