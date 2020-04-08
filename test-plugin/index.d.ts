import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Test Plugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { TestPlugin } from '@ionic-native/test-plugin';
 *
 *
 * constructor(private testPlugin: TestPlugin) { }
 *
 * ...
 *
 *
 * this.testPlugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class TestPluginOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    coolMethod(arg1: string): Promise<any>;
}

export declare const TestPlugin: TestPluginOriginal;