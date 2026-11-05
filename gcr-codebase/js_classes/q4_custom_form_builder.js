/**
 * Q4: Custom Form Builder (Forms + Classes)
 * Generates forms dynamically using innerHTML and includes getFormData() method.
 */

class FormBuilder {
    constructor(containerId, fields) {
        this.containerId = containerId;
        this.fields = fields; // Array of field objects {type, label, name, placeholder}
        this.formId = `dynamicForm_${Date.now()}`;
    }

    render() {
        let formHTML = `<form id="${this.formId}">\n`;

        this.fields.forEach(field => {
            formHTML += `  <div class="form-group">\n`;
            formHTML += `    <label>${field.label}</label>\n`;
            formHTML += `    <input type="${field.type}" name="${field.name}" placeholder="${field.placeholder || ''}" />\n`;
            formHTML += `  </div>\n`;
        });

        formHTML += `  <button type="submit">Submit</button>\n`;
        formHTML += `</form>`;

        if (typeof document !== 'undefined') {
            const container = document.getElementById(this.containerId);
            if (container) {
                container.innerHTML = formHTML;
                this.attachSubmitListener();
            }
        }
        return formHTML;
    }

    getFormData() {
        const formData = {};
        if (typeof document !== 'undefined') {
            const form = document.getElementById(this.formId);
            if (form) {
                const inputs = form.querySelectorAll('input');
                inputs.forEach(input => {
                    formData[input.name] = input.value;
                });
            }
        }
        return formData;
    }

    attachSubmitListener() {
        if (typeof document !== 'undefined') {
            const form = document.getElementById(this.formId);
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    console.log("Form Data Captured:", this.getFormData());
                });
            }
        }
    }
}

console.log("=== Q4: CUSTOM FORM BUILDER ===");
const fieldsConfig = [
    { type: 'text', label: 'Username', name: 'username', placeholder: 'Enter username' },
    { type: 'email', label: 'Email Address', name: 'email', placeholder: 'Enter email' },
    { type: 'password', label: 'Password', name: 'password', placeholder: 'Enter password' }
];

const builder = new FormBuilder('formContainer', fieldsConfig);
console.log("Generated Dynamic Form HTML Markup:\n", builder.render());
