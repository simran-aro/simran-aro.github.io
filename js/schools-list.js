import { htmlToElement } from "./template-tools.js";

function showSchoolsInList(schoolsToShow, schoolList) {
    schoolList.innerHTML = '';

    for (const school of schoolsToShow) {
        const html = `
            <li class="school-list-item">${school['name']}. School Level: ${school['School Level']}</li>
        `;
        const li = htmlToElement(html);
        schoolList.append(li);
    }
}

export {
    showSchoolsInList,
};
