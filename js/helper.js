import moment from "moment/moment";

function setTimer(el, startTime) {
  if (!el) return;
  const now = moment();
  const diff = now.diff(startTime);
  const duration = moment.duration(diff);
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  el.textContent = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
  setTimeout(() => {
    setTimer(el, startTime);
  }, 1000);
}

function getElByText(text) {
  const aTags = document.getElementsByTagName("span");
  for (let i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent?.indexOf(text) !== -1) {
      return aTags[i];
    }
  }
}

export function setExperienceTimers() {
  const total = {
    startTime: moment('2018-09-01 08:00:00'),
    el: getElByText('total experience counting...'),
  }
  setTimer(total.el, total.startTime);
  const flutter = {
    startTime: moment('2022-02-01T00:00:00+09:00'),
    el: getElByText('flutter experience counting...'),
  }
  setTimer(flutter.el, flutter.startTime);

  const cordova = {
    startTime: moment('2019-12-09 09:00:00'),
    el: getElByText('cordova experience counting...'),
  }
  setTimer(cordova.el, cordova.startTime);
  const vue = {
    startTime: moment('2018-01-01'),
    el: getElByText('vue experience counting...'),
  }
  setTimer(vue.el, vue.startTime);
}

function makeLink(href, text) {
  const a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  a.textContent = text;
  a.classList.add('hljs-string');
  return a;
}

export const features = [
  {
    text: 'personalEmail',
    feature: makeLink('mailto:grzegorz.hul@gmail.com', 'grzegorz.hul@gmail.com'),
  },
  {
    text: 'id=pl.librus.teacher',
    feature: makeLink('https://play.google.com/store/apps/details?id=pl.librus.teacher&hl=pl&gl=US&pli=1', 'Google Play'),
  },
  {
    text: 'librus-nauczyciel/id1591474710?l=pl',
    feature: makeLink('https://apps.apple.com/pl/app/librus-nauczyciel/id1591474710?l=pl', 'App Store'),
  },
  {
    text: 'id=com.holyseepavilion',
    feature: makeLink('https://play.google.com/store/apps/details?id=com.holyseepavilion&hl=pl&gl=US', 'Google Play'),
  },
  {
    text: 'id=pl.devgreg.neo_psalms',
    feature: makeLink('https://play.google.com/store/apps/details?id=pl.devgreg.neo_psalms&hl=pl&gl=US', 'Google Play'),
  },
  {
    text: 'id=pl.librus.synergiaDru2',
    feature: makeLink('https://play.google.com/store/apps/details?id=pl.librus.synergiaDru2', 'Google Play'),
  },
  {
    text: 'librus/id1122457592?l=pl',
    feature: makeLink('https://apps.apple.com/pl/app/librus/id1122457592?l=pl', 'App Store'),
  },
  {
    text: 'id=pl.devgreg.hodowla',
    feature: makeLink('https://play.google.com/store/apps/details?id=pl.devgreg.hodowla&pli=1', 'Google Play'),
  },
]

export function replaceTextWithFeature(text, feature) {
  const el = getElByText(text);
  if (el) {
    el.textContent = '';
    el.appendChild(feature);
  }
}

export function addCollapseButton(getText, isCollapsed, onClick) {
  const container = getElByText(getText);
  container.classList.add('collapse-container');
  const button = document.createElement('button');
  button.textContent = isCollapsed ? '+' : '-';
  button.classList.add('collapse-button');
  button.addEventListener('click', () => {
    onClick();
  })
  container.appendChild(button);
}
