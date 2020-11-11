import angular from "angular";
import "angular-material";
import "angular-messages";
import "angular-material-icons";

import "./app/header/header.component.js";

// Import your app stylesheets
import "./style.css";

// Import your app functionality
import "./app/app.component.js";

// Create and bootstrap application
const requires = [
  "app",
  "ngMaterial",
  "ngMessages",
  "ngMdIcons",
  "header.component"
];
const app = angular.module("appAudioserve", requires);
app
  .config([
    "$mdGestureProvider",
    "$mdThemingProvider",
    "$mdIconProvider",
    function($mdGestureProvider, $mdThemingProvider, $mdIconProvider) {
      $mdGestureProvider.skipClickHijack();
      $mdThemingProvider
        .theme("default")
        .primaryPalette("indigo")
        .accentPalette("purple")
        .warnPalette("purple")
        .backgroundPalette("grey");
    }
  ])
  .directive("regularCard", function() {
    return {
      restrict: "E",
      templateUrl: "app/regularCard.tmpl.html",
      scope: {
        name: "@"
      }
    };
  });
window.app = app;
