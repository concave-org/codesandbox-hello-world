import { createPipeline, createComponent, html } from "@concave/concave";

const render = (state, props) => ({
  h: html`
    <section id="${props.componentID}">
      <p id="dynamic">${state.text}</p>
    </section>
  `,
  attrs: { dynamic: { onclick: event => console.log(event) } }
});

const props = { componentID: "hello-world" };

const hello = createComponent(render, props);

export default createPipeline(hello);
