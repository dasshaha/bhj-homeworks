document.addEventListener('DOMContentLoaded', function() {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const dropdownValue = dropdown.querySelector('.dropdown__value');
            const dropdownList = dropdown.querySelector('.dropdown__list');
            
            dropdownValue.addEventListener('click', function() {
                dropdownList.classList.toggle('dropdown__list_active');
            });

            const items = dropdown.querySelectorAll('.dropdown__item');
            items.forEach(item => {
                
                item.addEventListener('click', function(event) {
                    event.preventDefault();
                    dropdownValue.textContent = this.textContent;
                    dropdownList.classList.remove('dropdown__list_active');
                });
            });

            document.addEventListener('click', function(event) {
                if (!dropdown.contains(event.target)) {
                    dropdownList.classList.remove('dropdown__list_active');
                }
            });
        });
    });