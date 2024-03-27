function formatTime(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  }

  // Функція для оновлення таймера
  function updateTimer() {
    // Парсимо рядок часу
    let timeParts = document.getElementById('timer').textContent.split(':');
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    let seconds = parseInt(timeParts[2]);

    // Зменшуємо час на одну секунду
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Таймер завершено
          clearInterval(timerInterval);
          // alert('Час вийшов!');
          return;
        }
      }
    }

    // Оновлюємо вміст таймера
    document.getElementById('timer').textContent = formatTime(hours, minutes, seconds);
  }

  // Оновлюємо таймер кожну секунду
  let timerInterval = setInterval(updateTimer, 1000);