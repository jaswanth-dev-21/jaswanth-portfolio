// Stage 1: SCRIPT_URL empty -> responses stored in browser localStorage (JSON).
// Stage 2: paste your deployed Google Apps Script Web App URL -> Google Sheets is the database.
export const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1lEFlQC5E-MOQ-SwJ4v3ogj76mu49J0tsN-xqnhQa0unF8h-tB3YD2dqEhOnkUskG/exec';
export const ADMIN_PASSWORD = 'Jaswanth'; // demo only: client-side check, change it
export const ADMIN_KEY = 'Jaswanth';     // must match ADMIN_KEY in apps-script/Code.gs
const LS_KEY = 'portfolioResponses';

export async function saveResponse(r) {
  if (SCRIPT_URL) {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(r),
    });
  } else {
    const list = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    list.push(r);
    localStorage.setItem(LS_KEY, JSON.stringify(list));
  }
}

export async function loadResponses() {
  if (SCRIPT_URL) {
    const res = await fetch(`${SCRIPT_URL}?key=${encodeURIComponent(ADMIN_KEY)}`);
    return res.json();
  }
  return JSON.parse(localStorage.getItem(LS_KEY) || '[]');
}
