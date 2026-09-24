import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function App() {

  const album = {
    Montanhas: [
      ['https://picsum.photos/id/1015/500/400', 'Montanha 1', 'Uma bela paisagem entre montanhas.'],
      ['https://picsum.photos/id/1016/500/400', 'Montanha 2', 'Montanhas cercadas pela natureza.'],
      ['https://picsum.photos/id/1018/500/400', 'Montanha 3', 'Uma vista incrível das montanhas.']
    ],

    Rios: [
      ['https://picsum.photos/id/1011/500/400', 'Rio 1', 'Um rio cercado pela natureza.'],
      ['https://picsum.photos/id/1019/500/400', 'Rio 2', 'Águas tranquilas em uma bela paisagem.'],
      ['https://picsum.photos/id/1039/500/400', 'Rio 3', 'Um rio passando entre árvores.']
    ],

    Viagens: [
      ['https://picsum.photos/id/1043/500/400', 'Viagem 1', 'Uma lembrança especial de viagem.'],
      ['https://picsum.photos/id/1050/500/400', 'Viagem 2', 'Um lugar conhecido durante uma viagem.'],
      ['https://picsum.photos/id/1051/500/400', 'Viagem 3', 'Mais uma paisagem das minhas viagens.']
    ]
  };

  const [categoria, setCategoria] = useState('Montanhas');
  const [fotoAtual, setFotoAtual] = useState(0);

  const fotos = album[categoria];
  const foto = fotos[fotoAtual];

  function mudarCategoria(nome) {
    setCategoria(nome);
    setFotoAtual(0);
  }

  function proxima() {
    setFotoAtual((fotoAtual + 1) % fotos.length);
  }

  function anterior() {
    setFotoAtual((fotoAtual - 1 + fotos.length) % fotos.length);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Meu Álbum</Text>

      <View style={styles.linha}>
        {Object.keys(album).map(nome => (
          <Pressable
            key={nome}
            style={styles.botao}
            onPress={() => mudarCategoria(nome)}
          >
            <Text style={styles.textoBotao}>{nome}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.categoria}>{categoria}</Text>

      <Foto
        imagem={foto[0]}
        titulo={foto[1]}
        descricao={foto[2]}
      />

      <Text>{fotoAtual + 1} / {fotos.length}</Text>

      <View style={styles.linha}>
        <Pressable style={styles.botao} onPress={anterior}>
          <Text style={styles.textoBotao}>Anterior</Text>
        </Pressable>

        <Pressable style={styles.botao} onPress={proxima}>
          <Text style={styles.textoBotao}>Próxima</Text>
        </Pressable>
      </View>

      <View style={styles.linha}>
        {fotos.map((foto, numero) => (
          <Pressable
            key={numero}
            style={styles.botaoFoto}
            onPress={() => setFotoAtual(numero)}
          >
            <Text style={styles.textoBotao}>{numero + 1}</Text>
          </Pressable>
        ))}
      </View>

    </View>
  );
}

function Foto(props) {
  return (
    <View style={styles.fotoContainer}>

      <Image
        source={{ uri: props.imagem }}
        style={styles.foto}
      />

      <Text style={styles.tituloFoto}>{props.titulo}</Text>

      <Text>{props.descricao}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    padding: 20
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15
  },

  categoria: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10
  },

  fotoContainer: {
    alignItems: 'center'
  },

  foto: {
    width: 300,
    height: 300,
    borderRadius: 10
  },

  tituloFoto: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },

  linha: {
    flexDirection: 'row',
    margin: 10
  },

  botao: {
    backgroundColor: '#333333',
    padding: 12,
    margin: 3,
    borderRadius: 8
  },

  botaoFoto: {
    backgroundColor: '#333333',
    padding: 10,
    margin: 3,
    borderRadius: 8
  },

  textoBotao: {
    color: '#ffffff'
  }

});