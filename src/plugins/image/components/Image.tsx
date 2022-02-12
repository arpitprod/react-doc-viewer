import React, { useContext } from "react";
import styled from "styled-components";
import { ImageContext } from "../state";
import { IImageState } from "../state/reducer";

const Image = () => {
  const {
    state: { mainState, zoomLevel },
  } = useContext(ImageContext);

  return (
		<ImgDiv>
			<Img id="image-img" zoomLevel={zoomLevel} src={mainState?.currentDocument?.fileData as string} />
		</ImgDiv>
  );
};

export default Image;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  max-width: 95%;
  max-height: 95%;
  transform: ${(props: IImageState) => `scale(${props.zoomLevel})`};
`;
