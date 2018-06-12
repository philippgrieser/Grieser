import Ember from "ember";

export default Ember.Component.extend({
	captchaSolved: false,
	buttonDisabled: false,
	valueName: '',
	valueMail: '',
	valueNumber: '',
	valueMessage: '',

	/*actions: {
		send(){
			this.set('buttonDisabled', true);
			emailjs.send("default_service", "webseite_template", {
				name: this.get('valueName'),
				message: this.get('valueMessage'),
				number: this.get('valueNumber'),
				mail: this.get('valueMail')
			});
		},
		onCaptchaResolved(reCaptchaResponse) {
			if (reCaptchaResponse) {
				this.set('captchaSolved', true);
			}
		},
	}*/
});
