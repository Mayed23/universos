import { View } from "react-native";
import { FlatList } from "react-native-web";

export const Categories =  () => (
    <View>
        <FlatList data={data} renderItem= {({item}) => <Text>{item}</Text>} />
    </View>
)