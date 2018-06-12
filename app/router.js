import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('kanzlei');
  this.route('leistungen');
  this.route('kontakt');
  this.route('mandanten');
  this.route('ueberuns');
  this.route('karte');
  this.route('impressum');
  this.route('philosophie');
  this.route('service');
  this.route('informationen');
  this.route('unterstuetzung');
  this.route('team');
  this.route('jobs');
  this.route('firmen');
  this.route('privat');
  //this.route('kontaktformular');
  this.route('pages');
  this.route('datenschutz');

  //
  // this.route('index', { path: '/*wildcard' });
});

export default Router;
