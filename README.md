# Tanúsítások – mobil ügykezelő (E-tanusitas.hu)

Statikus felület (GitHub Pages) a „Wekerle Plusz – feliratkozók” Google Táblázathoz.
Az adatok egy Apps Script webalkalmazáson keresztül jönnek (`doPost` JSON API); ebben a repóban **nincs ügyféladat és nincs kulcs**.

- Első indításkor be kell másolni az Apps Script webalkalmazás linkjét (`…/exec?k=…`); a telefon ezt helyben (localStorage) tárolja.
- iPhone: Safari → az oldal megnyitása → Megosztás → Főképernyőhöz adás → a főképernyőről indítva beírni a linket.
- Szerveroldal: `tanusitas-app.gs` a Claude-projektben (az Apps Script projekt: szemle-naptar).
