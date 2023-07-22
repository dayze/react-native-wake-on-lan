import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-wake-on-lan' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const WakeOnLan = NativeModules.WakeOnLan
  ? NativeModules.WakeOnLan
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function awake(macAddress: string, port: number): Promise<void> {
  return WakeOnLan.awake(macAddress, port);
}
