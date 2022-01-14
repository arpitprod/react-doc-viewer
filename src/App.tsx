import React from 'react';
import DocViewer, { PDFRenderer, PNGRenderer, JPGRenderer, DocViewerRenderers } from './DocViewer';

function App() {
  return (
    <DocViewer
			documents={[{ uri: require("./_example-files_/pdf.pdf") }]}
			pluginRenderers={DocViewerRenderers}
			config={{ header: { disableFileName: true } }}
    />
  );
}

export default App;
