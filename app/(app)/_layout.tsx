import { Stack } from "expo-router";

export const unstable_settings = {
	initialRouteName: "/welcome",
};

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShadowVisible: false,
				headerBackButtonDisplayMode: "minimal",
				headerTintColor: "#000",
				headerTitleStyle: { color: "#000" },
				headerStyle: { backgroundColor: "#FFF" },
				contentStyle: { backgroundColor: "#FFF" },
			}}
		>
			<Stack.Screen
				name="welcome"
				options={{
					animation: "none",
					headerShown: false,
					gestureEnabled: false,
					headerBackButtonMenuEnabled: false,
				}}
			/>
		</Stack>
	);
}
