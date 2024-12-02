import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

export default function Index() {
	const [visible, setVisible] = useState(false);
	const openModal = () => setVisible(true);

	return (
		<View style={{ padding: 50 }}>
			<View>
				<Pressable
					onPress={openModal}
					style={{ backgroundColor: "red", height: 40, width: 150 }}
				>
					<Text>Open</Text>
				</Pressable>
			</View>
			<Modal
				visible={visible}
				presentationStyle="pageSheet"
				animationType="slide"
			>
				<View>
					<View style={{ flex: 1 }}>
						<Pressable
							onPress={() => setVisible(false)}
							style={{ backgroundColor: "red", height: 40, width: 150 }}
						>
							<Text>Close</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
