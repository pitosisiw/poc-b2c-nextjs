/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.module.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare module '*.scss' {
  const content: string;
  export = content;
}
