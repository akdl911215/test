function getTime() {
  const xmasDay = new Date("2022-12-25 12:00:00");
  const currDay = new Date("2022-12-24 11:00:00");

  let diff = xmasDay - currDay;
  const diffDays = Math.floor(
    (xmasDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24)
  );
  diff -= diffDays * (1000 * 60 * 60 * 24);
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  diff -= diffHours * (1000 * 60 * 60);
  const diffMin = Math.floor(diff / (1000 * 60));
  diff -= diffMin * (1000 * 60);
  const diffSec = Math.floor(diff / 1000);

  console.log(
    `${diffDays < 10 ? `0${diffDays}` : diffDays}일 ${
      diffHours < 10 ? `0${diffHours}` : diffHours
    }시간 ${diffMin < 10 ? `0${diffMin}` : diffMin}분 ${
      diffSec < 10 ? `0${diffSec}` : diffSec
    }초`
  );
}

console.log(getTime());
