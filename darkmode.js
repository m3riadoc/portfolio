document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('darkmode-toggle');
    checkbox.addEventListener('change', function() {
      if(this.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  });