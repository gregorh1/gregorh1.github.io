import {addCollapseButton, features, replaceTextWithFeature, setExperienceTimers} from './helper';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';


export default {
  data() {
    return {
      mainTechStackCollapsed: false,
      flutterProjectsCollapsed: false,
      cordovaProjectsCollapsed: false,
    }
  },
  template: `
    <pre>
      <code class='language-json'>{{ this.fullJson }}</code>
    </pre>
  `,
  mounted() {
    hljs.registerLanguage('json', json);
    hljs.configure({
      languages: ['json'],
    });
    this.setTimersAndFeaturesAfterUpdate();
  },
  updated() {
    console.log('updated');
    this.setTimersAndFeaturesAfterUpdate();
  },
  methods: {
    setTimersAndFeaturesAfterUpdate() {
      hljs.highlightAll();
      setTimeout(() => {
        setExperienceTimers();
        features.forEach(({text, feature}) => {
          replaceTextWithFeature(text, feature);
        })

        // addCollapseButton('mainTechStack', this.mainTechStackCollapsed, () => {
        //   this.resetHljs();
        //   this.mainTechStackCollapsed = !this.mainTechStackCollapsed;
        // });
        // addCollapseButton('flutterProjects', this.flutterProjectsCollapsed, () => {
        //   this.resetHljs();
        //   this.flutterProjectsCollapsed = !this.flutterProjectsCollapsed;
        // });
        // addCollapseButton('cordovaProjects', this.cordovaProjectsCollapsed, () => {
        //   this.resetHljs();
        //   this.cordovaProjectsCollapsed = !this.cordovaProjectsCollapsed;
        // });
      }, 10)
    },
    resetHljs() {
      document.querySelector('[data-highlighted]').removeAttribute('data-highlighted');
    },
  },
  computed: {
    fullJson() {
      return {
        name: 'Grzegorz',
        surName: 'Hul',
        profession: 'developer',
        email: 'personalEmail',
        totalCommercialExperienceTime: 'total experience counting...',
        mainTechStack: this.mainTechStackCollapsed ? '...' : [
          {
            name: 'Flutter',
            experienceTime: 'flutter experience counting...', // along with Cordova
            isExperienceCommercial: 'true',
            isTechPreferable: 'true',
            usedLibrariesOrPlugins: [
              'firebase', 'bloc', 'floor', 'go_router', 'intl', 'webview_flutter',
              'video_player', 'chewie', 'lottie', 'and many more...',
            ],
            flutterProjects: this.flutterProjectsCollapsed ? '...' : [
              {
                name: 'Teachers app for Librus',
                description: 'App for teachers to manage their school messages, calendar, courses, etc.',
                isCommercial: 'true',
                devTeamSize: '3',
                link: 'https://play.google.com/store/apps/details?id=pl.librus.teacher&hl=pl&gl=US&pli=1',
                link2: 'https://apps.apple.com/pl/app/librus-nauczyciel/id1591474710?l=pl',
              },
              {
                name: 'Holy See Pavilion',
                description: 'Mobile guide to the Holy See Pavilion at Expo 2020 Dubai UAE',
                isCommercial: 'false',
                devTeamSize: '1',
                link: 'https://play.google.com/store/apps/details?id=com.holyseepavilion&hl=pl&gl=US',
              },
              {
                name: 'Melodies of the morning psalms',
                description: 'Rather personal app with psalms and melodies for morning prayers',
                isCommercial: 'false',
                devTeamSize: '1',
                link: 'https://play.google.com/store/apps/details?id=pl.devgreg.neo_psalms&hl=pl&gl=US',
              },
            ],
          },
          {
            name: 'Cordova',
            experienceTime: 'cordova experience counting...',
            isExperienceCommercial: 'true',
            isTechPreferable: 'false',
            usedLibrariesOrPlugins: ['plenty'],
            cordovaProjects: this.cordovaProjectsCollapsed ? '...' : [
              {
                name: 'Parents and students app for Librus',
                description: 'App for parents and students to manage their school messages, calendar, grades, etc.',
                isCommercial: 'true',
                devTeamSize: '3',
                link: 'https://play.google.com/store/apps/details?id=pl.librus.synergiaDru2',
                link2: 'https://apps.apple.com/pl/app/librus/id1122457592?l=pl',
              },
              {
                name: 'Board game Farmer',
                description: 'Board game for 2-4 players written in React using css-grid',
                isCommercial: 'false',
                devTeamSize: '1',
                link: 'https://play.google.com/store/apps/details?id=pl.devgreg.hodowla&pli=1',
              },
            ],
          },
          {
            name: 'Vue.js',
            experienceTime: 'vue experience counting...',
            isExperienceCommercial: 'true',
            isTechPreferable: 'true',
            usedLibrariesOrPlugins: [
              'Vuex', 'VuexORM', 'many others',
            ],
          },
        ],
        // otherTechs: [
        //   ''
        // ],
        // otherProjects: [],
      }
    },
  }
};
