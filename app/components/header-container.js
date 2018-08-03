import Ember from "ember";

export default Ember.Component.extend({
	items: [{
		link: 'kanzlei',
		linkText: 'Kanzlei',
		link2: 'philosophie',
		link2Text: 'Philosophie',
		link3: 'service',
		link3Text: 'Service',
	}, {
		link: 'mandanten',
		linkText: 'Mandanten',
		link2: 'informationen',
		link2Text: 'Informationen',
		link3: 'unterstuetzung',
		link3Text: 'Unterstützung',
	}, {
		link: 'leistungen',
		linkText: 'Leistungen',
		link2: 'firmen',
		link2Text: 'Firmenkunden',
		link3: 'privat',
		link3Text: 'Privatkunden',
	}, {
		link: 'kontakt',
		linkText: 'Kontakt',
		link2: 'ueberuns',
		link2Text: 'Über Uns',
		link3: 'jobs',
		link3Text: 'Jobangebote',
	}],
});
