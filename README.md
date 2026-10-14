# Zeekr App

Vehicle information app for iOS and Android, using Expo and TypeScript.
The first screen uses labeled demo data. No vehicle API is connected.

## Development

Use Node.js 24. From this checkout:

```sh
npm ci
npm start
npm run typecheck
npx expo export --platform all --output-dir /tmp/zeekr-export
```

Use a compatible Expo Go client or a development build on a device with network
access to the development server. For the simplest device setup, run this
checkout locally on the same network as the phone. Cloud localhost is not
reachable from a phone. An iOS simulator requires macOS and Xcode.

Bundle exports validate JavaScript compilation, not device behavior.
Native distribution builds and vehicle authentication are not configured yet.
