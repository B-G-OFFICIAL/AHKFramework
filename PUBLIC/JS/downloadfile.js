// DOWNLOAD FILE CONTENT from online content
document.getElementById("downloadButton").addEventListener("click", function() {
    let filename = document.getElementById('FileName').value;
  
    fetch(`../AHKFILE/${filename}.ahk`)
      .then(response => response.text())
      .then(fileContent => {
        
        const modifiedContent = `q::\n{\n${fileContent}\n}\nReturn\n\np::pause`;
  
        const blob = new Blob([modifiedContent], { type: 'text/plain' });
  
        const blobUrl = URL.createObjectURL(blob);
  
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = `${filename}.ahk`;
        
        link.click();
  
        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Error fetching the file:', error);
      });
  });
  