import {sendEmail}  from "./utils/sendEmail.ts"


const bodyHtml = `<div>Prueba final.Su codigo para resetear la password</div><div><span style='font-size: 15px;color : green'></span></div>`;


sendEmail([],'asunto',bodyHtml);
