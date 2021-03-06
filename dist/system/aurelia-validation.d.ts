export * from './validate-binding-behavior';
export * from './validate-trigger';
export * from './validation-controller';
export * from './validation-controller-factory';
export * from './validation-error';
export * from './validation-errors-custom-attribute';
export * from './validation-renderer-custom-attribute';
export * from './validation-renderer';
export * from './validator';
export * from './implementation/metadata-key';
export * from './implementation/rule';
export * from './implementation/standard-validator';
export * from './implementation/validation-messages';
export * from './implementation/validation-parser';
export * from './implementation/validation-rules';
import { Container } from 'aurelia-dependency-injection';
export declare function configure(frameworkConfig: {
    container: Container;
    globalResources: (...resources: string[]) => any;
}, config: {
    customValidator?: boolean;
}): void;
