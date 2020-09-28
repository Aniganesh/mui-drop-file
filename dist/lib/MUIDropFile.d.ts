import React from 'react';
export interface IMUIDropFile {
    onDropFile: (files: any) => void;
    multiple?: boolean;
    activeClass?: string;
    inactiveClass?: string;
    defaultClass?: string;
}
export declare const MUIDropFile: React.FC<IMUIDropFile>;
