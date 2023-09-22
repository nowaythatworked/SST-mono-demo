import { SSTConfig } from "sst";
import { Astro } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst-mono-test",
      region: "us-east-1",
      profile: _input.stage === 'production' ? 'jczek-prod' : 'jczek-dev'
    };
  },
  stacks(app) {
    app.stack(Astro);
  }
} satisfies SSTConfig;
