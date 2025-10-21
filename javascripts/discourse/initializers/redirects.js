import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "topic-redirects",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.onPageChange((url) => {
        const redirects = {
          "6402": "https://towerunite.com/guides/ban_appeals.html",
          "10103": "https://towerunite.com/guides/reporting_player.html",
          "41126": "https://towerunite.com/guides/reporting_condo.html",
          "46316": "https://towerunite.com/guides/rules.html",
        };

        const match = url.match(/\/t\/[^/]+\/(\d+)/);
        if (match && redirects[match[1]]) {
          window.location.replace(redirects[match[1]]);
        }
      });
    });
  },
};
