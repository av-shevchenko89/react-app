// hack to import images
declare module '*.png' {
    const src: string;
    export default src;
}
