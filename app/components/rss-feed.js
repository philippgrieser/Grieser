import Ember from "ember";
import moment from "moment";

export default Ember.Component.extend({
	feed: null,

	didInsertElement() {
		const url = 'https://www.datev.de/web/de/rss/nachrichten-steuern.rss';
		feednami.setPublicApiKey('c56156b5a00fdb62ef98c8263188ce672814568210cb54a13af701b1a1a471b8');
		feednami.load(url)
			.then(feed => {
				feed = feed.entries.slice(0, 99).map((d) => {
					d.date = moment(d.date).format("DD.MM.YYYY");
					return d;
				});

				this.set('feed', feed);
			});
	}
});
