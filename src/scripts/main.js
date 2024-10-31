'use strict';

const allHeadlines = document.querySelectorAll('th');
const tBody = document.querySelector('tbody');
const allRows = Array.from(tBody.querySelectorAll('tr'));

for (let i = 0; i < allHeadlines.length; i++) {
  allHeadlines[i].addEventListener('click', () => {
    const sortedRows = allRows.sort((a, b) => {
      const aText = a.cells[i].textContent.trim();
      const bText = b.cells[i].textContent.trim();

      const aV = isNaN(aText) ? aText : parseFloat(aText.replace(/[$,]/g, ''));
      const bV = isNaN(bText) ? bText : parseFloat(bText.replace(/[$,]/g, ''));

      if (typeof aV === 'number' && typeof bV === 'number') {
        return aV - bV;
      } else {
        return aV.localeCompare(bV);
      }
    });

    tBody.innerHTML = '';
    sortedRows.forEach((row) => tBody.appendChild(row));
  });
}
