import React from 'react';
import DocViewer, { PDFRenderer, PNGRenderer, JPGRenderer, DocViewerRenderers } from './DocViewer';

function App() {
  return (
		<div style={{height: '99vh'}}>
    <DocViewer
			documents={[
				{ uri: require("./_example-files_/pdf.pdf").default, fileName: 'ABC' }, // Local File
				{ uri: require("./_example-files_/sample.pdf").default }, // Local File
				{ uri: require("./_example-files_/sample.png").default },
				{ uri: require("./_example-files_/sample.jpg").default },
				{ uri: require("./_example-files_/sample.txt").default },
				{ uri: require("./_example-files_/sample.doc").default }, // will work with online url not local path
				{ uri: require("./_example-files_/sample.ppt").default }, // will work with online url not local path
				{ uri: require("./_example-files_/sample.xls").default }, // will work with online url not local path
			]}
			pluginRenderers={DocViewerRenderers}
			// config={{ header: { disableFileName: true } }}
    />
		</div>
  );
}

export default App;
