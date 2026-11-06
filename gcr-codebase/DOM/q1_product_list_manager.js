/**
 * Q1: Dynamic Product List Manager (Add, Edit, Delete using Event Delegation)
 * Logic:
 * - Uses event delegation on the parent <ul> container to catch clicks on 'Edit' and 'Delete' buttons.
 * - Auto-saves inline editing when clicking outside the target product item.
 */

const q1HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Q1 - Product List Manager</title>

</head>
<body>
    <h2>Dynamic Product Manager</h2>
    <div class="container">
        <input type="text" id="productInput" placeholder="Enter product name...">
        <button id="addBtn">Add Product</button>
        <ul id="productList"></ul>
    </div>

    <script>
        const productInput = document.getElementById('productInput');
        const addBtn = document.getElementById('addBtn');
        const productList = document.getElementById('productList');
        let currentEditingLi = null;

        // Add Product
        addBtn.addEventListener('click', () => {
            const name = productInput.value.trim();
            if (!name) return alert('Please enter a product name!');

            const li = document.createElement('li');
            li.className = 'product-item';
            li.innerHTML = \`
                <span class="product-name">\${name}</span>
                <input type="text" class="edit-input" value="\${name}">
                <button class="btn edit-btn">Edit</button>
                <button class="btn delete-btn">Delete</button>
            \`;
            productList.appendChild(li);
            productInput.value = '';
        });

        // Event Delegation on <ul> for Edit and Delete
        productList.addEventListener('click', (e) => {
            const target = e.target;
            const li = target.closest('li');
            if (!li) return;

            if (target.classList.contains('delete-btn')) {
                li.remove();
            } else if (target.classList.contains('edit-btn')) {
                toggleEditMode(li);
            }
        });

        function toggleEditMode(li) {
            if (currentEditingLi && currentEditingLi !== li) {
                saveEdit(currentEditingLi);
            }
            li.classList.add('editing');
            const input = li.querySelector('.edit-input');
            input.focus();
            currentEditingLi = li;
        }

        function saveEdit(li) {
            if (!li || !li.classList.contains('editing')) return;
            const input = li.querySelector('.edit-input');
            const span = li.querySelector('.product-name');
            const newName = input.value.trim();
            if (newName) {
                span.textContent = newName;
            } else {
                input.value = span.textContent;
            }
            li.classList.remove('editing');
            currentEditingLi = null;
        }

        // Auto-save on click outside
        document.addEventListener('click', (e) => {
            if (currentEditingLi && !currentEditingLi.contains(e.target) && e.target !== addBtn) {
                saveEdit(currentEditingLi);
            }
        });
    </script>
</body>
</html>
`;

console.log("Q1 Script initialized: Dynamic Product List Manager logic ready.");
