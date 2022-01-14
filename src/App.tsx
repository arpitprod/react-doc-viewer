import React from 'react';
import DocViewer, { PDFRenderer, PNGRenderer, JPGRenderer, DocViewerRenderers } from './DocViewer';

function App() {
  return (
    <DocViewer
			documents={[{ uri: require("./_example-files_/pdf.pdf") }, { uri: require("./_example-files_/pdf1.pdf") }]}
			pluginRenderers={DocViewerRenderers}
			config={{ header: { disableFileName: true } }}
    />
  );
}

export default App;
