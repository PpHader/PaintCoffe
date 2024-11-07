window.addEventListener('DOMContentLoaded', () => {
  const modelViewers = document.querySelectorAll('model-viewer');
  modelViewers.forEach((modelViewer) => {
      modelViewer.style.width = '100%';
      modelViewer.style.height = '400px';
  });
});