document.addEventListener('DOMContentLoaded', () => {
  // Course Registration Modal Handling
  const registerModal = document.getElementById('registerModal');
  const modalCourseName = document.getElementById('modalCourseName');
  const confirmEnrollmentBtn = document.getElementById('confirmEnrollmentBtn');

  if (registerModal) {
    registerModal.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget;
      const courseName = button.getAttribute('data-coursename');
      modalCourseName.textContent = courseName;
    });
  }

  if (confirmEnrollmentBtn) {
    confirmEnrollmentBtn.addEventListener('click', () => {
      alert('Course registered successfully!');
      location.reload();
    });
  }

  // Cafeteria Form Handling
  const cafeteriaForm = document.getElementById('cafeteriaForm');
  if (cafeteriaForm) {
    cafeteriaForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const selectedItem = document.getElementById('selectItem').value;
      const quantity = document.getElementById('quantity').value;
      
      alert(`Cafeteria order placed successfully!\nItem: ${selectedItem}\nQuantity: ${quantity}`);
      cafeteriaForm.reset();
    });
  }
});
