import Ember from "ember";
import moment from "moment";

export default Ember.Component.extend({
	didInsertElement() {
		const url = 'https://www.datev.de/web/de/rss/nachrichten-steuern.rss';

		// send request
		Ember.$.getJSON(url, function (data, status, errorThrown) {
			if (status === 'success') {
				$.each(data.query.results.rss.channel.item, function (key, value) {
					console.log(value);

					const entry = '<div class="entry">' +
						'<h2><a href=\"' + value.link + '\">' + moment(value.pubDate).format("DD.MM.YYYY") + ": " + value.title + '</a></h2>' +
						'<p>' + value.description + '</p>' +
						'</div>';

					// * append entire entry in container
					$('#feed-container').append(entry);
				});

			} else if (status === 'error' || status === 'parsererror') {
				// * log error message in console
				console.log(errorThrown);

				// * show error message
				// alert('Could not load RSS feed!');
			}
		});
	},


});
