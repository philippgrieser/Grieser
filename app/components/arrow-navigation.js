import Ember from "ember";
import { computed } from "@ember/object";

export default Ember.Component.extend({
  router: Ember.inject.service('-routing'),

  tagName: 'div',
  classNames: ['arrow-container'],

  direction: '',
  show: false,


  transform: computed('direction', function() {
    if(this.get('direction') === 'back') {
      return 'rotate(180)';
    }

    return '';
  }),

  link: computed('router.currentRouteName', function() {
    const route = this.get('router.currentRouteName');

    return this.get(`links.${route}.${this.get('direction')}.link`);
  }),

  linkName: computed('router.currentRouteName', function() {
    const route = this.get('router.currentRouteName');

    return this.get(`links.${route}.${this.get('direction')}.name`);
  }),

  links: {
    index: {
      next: {
        link: 'philosophie',
        name: 'Philosophie',
      },
      back: {
        link: 'kontakt',
        name: 'Kontakt',
      }
    },
    kanzlei: {
      next: {
        link: 'philosophie',
        name: 'Philosophie',
      },
      back: {
        link: 'kontakt',
        name: 'Kontakt',
      }
    },
    philosophie: {
      next: {
        link: 'service',
        name: 'Service',
      },
      back: {
        link: 'kanzlei',
        name: 'Kanzlei',
      }
    },
    service: {
      next: {
        link: 'mandanten',
        name: 'Mandanten',
      },
      back: {
        link: 'philosophie',
        name: 'Philosophie',
      }
    },
    mandanten: {
      next: {
        link: 'informationen',
        name: 'Informationen',
      },
      back: {
        link: 'service',
        name: 'Service',
      }
    },
    informationen: {
      next: {
        link: 'unterstuetzung',
        name: 'Unterstützung',
      },
      back: {
        link: 'mandanten',
        name: 'Mandanten',
      }
    },
    unterstuetzung: {
      next: {
        link: 'leistungen',
        name: 'Leistungen',
      },
      back: {
        link: 'informationen',
        name: 'Informationen',
      }
    },
    leistungen: {
      next: {
        link: 'firmen',
        name: 'Firmen',
      },
      back: {
        link: 'unterstuetzung',
        name: 'Unterstützung',
      }
    },
    firmen: {
      next: {
        link: 'privat',
        name: 'Privat',
      },
      back: {
        link: 'leistungen',
        name: 'Leistungen',
      }
    },
    privat: {
      next: {
        link: 'kontakt',
        name: 'Kontakt',
      },
      back: {
        link: 'firmen',
        name: 'Firmenkunden',
      }
    },
    kontakt: {
      next: {
        link: 'ueberuns',
        name: 'Über Uns',
      },
      back: {
        link: 'privat',
        name: 'Privatkunden',
      }
    },
    ueberuns: {
      next: {
        link: 'jobs',
        name: 'Jobangebote',
      },
      back: {
        link: 'kontakt',
        name: 'Kontakt',
      }
    },
    jobs: {
      next: {
        link: 'kanzlei',
        name: 'Kanzlei',
      },
      back: {
        link: 'ueberuns',
        name: 'Über Uns',
      }
    },
    datenschutz: {
      next: {
        link: 'kanzlei',
        name: 'Kanzlei',
      },
      back: {
        link: 'kontakt',
        name: 'Kontakt',
      }
    },
    impressum: {
      next: {
        link: 'kanzlei',
        name: 'Kanzlei',
      },
      back: {
        link: 'kontakt',
        name: 'Kontakt',
      }
    },
  },

  mouseEnter() {
    this.set('show', true);
  },

  mouseLeave() {
    this.set('show', false);
  },
});
