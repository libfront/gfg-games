declare const index: (url: string, opt?: {
    type: string;
}) => Promise<unknown>;
export { index as load_script };
