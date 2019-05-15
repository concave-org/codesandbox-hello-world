import {
  runPipeline,
  createStore,
  createRouter,
  createRenderer,
  createPipeline
} from "@concave/concave";

import * as helloPipe from "./pipelines/hello";

const appStore = createStore((state, action, dispatch) => {
  switch (
    action.type
    // ...dispatch state here with new state
  ) {
  }
  return action;
});

const routes = [
  { path: "/", pipe: () => helloPipe },
  { path: "/hello", pipe: () => helloPipe },
  { fallback: "/" }
];

const appRouter = createRouter(routes);

const appRender = createRenderer(document.getElementById("app"));

const logger = (action, dispatch) => {
  console.log(action);
  return action;
};

const corePipe = createPipeline(logger, appStore, appRouter, appRender);

const initialState = {
  text: "Hello World"
};

runPipeline(corePipe)(initialState);
