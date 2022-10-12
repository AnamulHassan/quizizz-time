import React from 'react';

const Blog = () => {
  return (
    <section className="bg-[#f2f2f2] text-[#4d4d4d] text-md  md:text-lg font-semibold">
      <article className="w-4/5 mx-auto py-6 md:py-8 leading-6 md:leading-8">
        <h2 className="text-2xl md:text-3xl mb-2 font-bold text-[#1a1a1a]">
          What is the purpose of React router?
        </h2>
        <p>
          React Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
        <p className="mt-3">
          React Router is a standard library system built on React and used to
          create routing in the React application using React Router Package. It
          provides the synchronous URL on the browser with data that will be
          displayed on the web page.
        </p>
        <p className="mt-3">
          React Router plays an important role in displaying multiple views in a
          single-page application. Without React Router, it is not possible to
          show multiple views in React applications. Most social media websites
          like Facebook, and Instagram uses React Router for rendering multiple
          views.
        </p>
      </article>
      <article className="w-4/5 mx-auto py-6 md:py-8 leading-6 md:leading-8">
        <h2 className="text-2xl md:text-3xl mb-2 font-bold text-[#1a1a1a]">
          How does context API work?
        </h2>
        <p>
          The React Context API is a component structure, which allows us to
          share data across all levels of the application. The main purpose of
          Context API is to solve the problem of prop drilling (also called
          "Threading"). The Context API in React are given below.
        </p>
        <ul className="list-disc ml-12">
          <li>React.createContext</li>
          <li>Context.provider</li>
          <li>Context.Consumer</li>
          <li>Class.contextType</li>
        </ul>
        <h3 className="font-bold text-xl mt-3">React.createContext</h3>
        <p>
          It creates a context object. When React renders a component which
          subscribes to this context object, then it will read the current
          context value from the matching provider in the component tree.
        </p>
        <h3 className="font-bold text-xl mt-3">Context.Provider</h3>
        <p>
          Every Context object has a Provider React component which allows
          consuming components to subscribe to context changes. It acts as a
          delivery service. When a consumer component asks for something, it
          finds it in the context and provides it where it is needed. It accepts
          the value prop and passes it to consuming components which are
          descendants of this Provider. We can connect one Provider with many
          consumers.
        </p>
        <h3 className="font-bold text-xl mt-3">Context.Consumer</h3>
        <p>
          It is the React component which subscribes to the context changes. It
          allows us to subscribe to the context within the function component.
          It requires the function as a component. A consumer is used to request
          data through the provider and manipulate the central data store when
          the provider allows it.
        </p>
        <h3 className="font-bold text-xl mt-3">Class.contextType</h3>
        <p>
          The contextType property on a class used to assign a Context object
          which is created by React.createContext(). It allows you to consume
          the closest current value of that Context type using this.context. We
          can reference this in any of the component life-cycle methods,
          including the render function.
        </p>
      </article>
      <article className="w-4/5 mx-auto py-6 md:py-8 leading-6 md:leading-8">
        <h2 className="text-2xl md:text-3xl mb-2 font-bold text-[#1a1a1a]">
          What is useRefs?
        </h2>
        <p>
          Refs is the shorthand used for references in React. It is similar to
          keys in React. It is an attribute which makes it possible to store a
          reference to particular DOM nodes or React elements. It provides a way
          to access React DOM nodes or React elements and how to interact with
          them. It is used when we want to change the value of a child
          component, without making use of props.
        </p>
        <p className="mt-3">
          Refs can be created by using React.createRef(). It can be assigned to
          React elements via the ref attribute. It is commonly assigned to an
          instance property when a component is created, and then can be
          referenced throughout the component.
        </p>
      </article>
    </section>
  );
};

export default Blog;
