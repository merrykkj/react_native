import { styles } from './styles';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.area1}>
          <Text style={styles.title}>
            Area 1
          </Text>
        </View>


        <View style={styles.area2}>
          <Text style={styles.title}>
            Area 2
          </Text>
        </View>
        
        <View style={styles.area3}>
          <Text style={styles.title}>
            Area 3
          </Text>
        </View>
    </View>
  );
}