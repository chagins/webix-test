const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'public/templates');
const outputFile = path.join(__dirname, 'public/templatesList.json');

fs.readdir(templatesDir, (err, files) => {
  if (err) {
    console.error('Unable to scan directory:', err);
    return;
  }

  const filteredFiles = files.filter((file) => {
    const extension = path.extname(file).toLocaleLowerCase();
    return extension === '.xlsx' || extension === '.xls';
  });

  const templateList = filteredFiles.map((file) => ({
    name: file,
    path: `/templates/${file}`,
  }));

  fs.writeFile(outputFile, JSON.stringify(templateList, null, 2), (err) => {
    if (err) {
      console.error('Error writing file list:', err);
    } else {
      console.log('Templates list generated successfully.');
    }
  });
});
