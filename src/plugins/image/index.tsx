import React from "react";
import styled from "styled-components";
import { ImageProvider } from "./state";
import { DocRenderer } from "../../types";
import Image from "./components/Image";
import ImageControls from "./components/ImageControls";

const ImageProxyRenderer: DocRenderer = (props) => {
  const {
    mainState,
  } = props;

  if (!mainState.currentDocument) return null;

  return (
    <ImageProvider mainState={mainState}>
		<Container id="image-renderer" {...props}>
			<ImageControls />
			<Image />
			{/* <ImgDiv>
				{children || (
					<Img id="image-img" zoomLevel={zoomLevel} src={currentDocument.fileData as string} />
				)}
			</ImgDiv> */}
		</Container>
    </ImageProvider>
  );
};

export default ImageProxyRenderer;

ImageProxyRenderer.fileTypes = [];
ImageProxyRenderer.weight = 0;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
`;
