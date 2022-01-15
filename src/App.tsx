import React from 'react';
import DocViewer, { PDFRenderer, PNGRenderer, JPGRenderer, DocViewerRenderers } from './DocViewer';

function App() {
  return (
    <DocViewer
			documents={[{ uri: require("./_example-files_/pdf.pdf").default }, { uri: require("./_example-files_/pdf1.pdf").default }]}
			pluginRenderers={DocViewerRenderers}
			config={{ header: { disableFileName: true } }}
    />
  );
}

export default App;
