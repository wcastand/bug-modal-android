import { KeyboardProvider } from "react-native-keyboard-controller";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SystemBars } from "react-native-edge-to-edge";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const onLayoutRootView = useCallback(async () => {
		try {
			SplashScreen.hide();
		} catch (e: any) {
			console.log(e);
		}
	}, []);
	return (
		<KeyboardProvider>
			<SystemBars style={"dark"} />
			<GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
				<Slot />
			</GestureHandlerRootView>
		</KeyboardProvider>
	);
}
