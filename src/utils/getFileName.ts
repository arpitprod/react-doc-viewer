import { IConfig, IDocument } from "../types";

export const getFileName = (config: IConfig | undefined, currentDocument: IDocument | undefined) => {
  let fileName = "";
	if (currentDocument?.fileName) {
		fileName = currentDocument.fileName;
	}
	else {
		fileName = currentDocument?.uri || "";
		fileName = decodeURI(fileName);

		if (!config?.header?.retainURLParams) {
			fileName = fileName.split("?")[0];
		}

		const splitURL = fileName.split("/");
		if (splitURL.length) {
			fileName = splitURL[splitURL.length - 1];
		}
	}
	return fileName;
}
