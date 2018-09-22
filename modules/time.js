var hours;
var minutes;
var seconds;

var hours = uptime / 60;
var minutes = (uptime - (hours * 3600)) / 60;
var seconds = uptime - (hours * 3600) - (minutes * 60);

//function formatUptime(uptime) {
//  if (uptime < 60) {
//    return `${uptime} sek.`;
//  }
//}

//Stwórz moduł, który będzie poprawnie formatował czas. Zależy nam na napisaniu funkcji:
//do przekształcania sekund na minuty - przykładowo, podając 125 sekund wyświetli 2 min. 5 sek.
//sekund na godziny - podając 3700 sekund wyświetli 1 godz. 1 min. 40 sek.
//dodaj moduł do katalogu modules i skorzystaj z niego w module OSinfo do poprawnego formatowania czasu działania systemu
