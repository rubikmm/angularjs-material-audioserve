angular.module("appAudioserve").component("header.component", {
  template: "Hello, {{$ctrl.user}}!",
  controller: function HeaderController() {
    this.user = "world";
  }
});
