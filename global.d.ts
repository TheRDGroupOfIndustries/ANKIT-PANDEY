declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'remixicon/fonts/remixicon.css';