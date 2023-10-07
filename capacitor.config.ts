import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bapp.app',
  appName: 'bapp',
  webDir: 'dist/bapp',
  server: {
    androidScheme: 'https'
  }
};

export default config;
