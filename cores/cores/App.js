import { styles } from './styles';
import { Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.area1}>
          <Image
            style={{
              width: 200,
              height: 220
            }}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlI4NGzrxS6BH8ICFLcNDy9rUrdLv6PHqEsw&s' }} />

        </View>
        <View style={styles.area2}>
          <Image
            style={{
              width: 200,
              height: 220
            }}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Negrinhodopastoreio.jpg' }} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.area3}>
          <Image
            style={{
              width: 200,
              height: 220
            }}
            source={{ uri: 'https://www.otempo.com.br/content/dam/otempo/editorias/entretenimento/celebridades/2023/11/entretenimento-tirulipa-tudo-o-que-ja-sabemos-sobre-o-novo-programa-do-filho-de-tiririca-no-sbt-1708747831.jpeg' }} />
        </View>
        <View style={styles.area4}>
          <Image
            style={{
              width: 200,
              height: 220
            }}
            source={{ uri: 'https://www.rbsdirect.com.br/imagesrc/24845985.jpg?format=webp&w=1600&h=1200&a=c' }} />
        </View>
      </View>


      <View style={styles.row}>
        <View style={styles.area5}>
          <Image
            style={{
              width: 200,
              height: 220
            }}
            source={{ uri: 'https://uploads.metroimg.com/wp-content/uploads/2021/08/03215208/Lucas-Rangel-1.jpg' }} />
        </View>

        <View style={styles.area6}>
        <Image
            style={{
              width: 200,
              height: 220
            }}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXSZnOLpHq_HE_xHEQy8ZPeT0_zHxU4ywSA&s' }} />
        </View>
      </View>
    </View>

  );
}