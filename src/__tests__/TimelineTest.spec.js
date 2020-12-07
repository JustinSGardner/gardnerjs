import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import BlogPostTemplete from "../templates/blog-post";

let container = null;
beforeEach(() =>{
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() =>{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with a header', () =>{
  act(() => {
    render(<BlogPostTemplete />, container);
  });
  expect(
    container.querySelector("[data-testid='headline']").textContent).toBe('Hello World');

});
