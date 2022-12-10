import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "react-native"
import routes from "../common/routes"
import Home from "../screens/Home"
import Palette from "../screens/Palette"

const Stack = createNativeStackNavigator()

export default function Root() {
    return <Stack.Navigator>
        <Stack.Screen name={routes.home} component={Home} options={{
            header: () => null,
        }} />
        <Stack.Screen name={routes.palette} component={Palette} />
    </Stack.Navigator>
}