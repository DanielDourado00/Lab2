import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function TelaInicio() {
  const [numero, setNumero] = useState("00:00:00");
  const [botao, setBotao] = useState("Iniciar");
  const [ultimo, setUltimo] = useState(null);

  function iniciar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotao("Continuar");
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);

        setNumero(format);
      }, 1000);

      setBotao("Parar");
    }
  }

  function zerar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotao("Iniciar");
      setUltimo("");
      setNumero("00:00:00");
      ss = 0;
      mm = 0;
      hh = 0;
    } else {
      setUltimo(numero);
      setNumero("00:00:00");
      ss = 0;
      mm = 0;
      hh = 0;
      setBotao("Iniciar");
    }
  }

  return (
    <ImageBackground
      source={require("../Imagens/backgroundgym.png")}
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.8 }} // Opacidade reduzida da imagem de fundo
    >
      <View style={styles.container}>
        <View style={styles.cronoContainer}>
          <Image source={require("../Imagens/crono.png")} style={styles.cronoImage} />
          <Text style={styles.timer}>{numero}</Text>
        </View>
        <View style={styles.areaUltimo}>
          <Text style={styles.textCorrida}>
            {ultimo ? "Ultimo tempo: " + ultimo : " "}
          </Text>
        </View>
      </View>
      <SafeAreaView style={styles.footer}>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btnButton} onPress={iniciar}>
            <Text style={styles.btnText}>{botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnButton} onPress={zerar}>
            <Text style={styles.btnText}>Zerar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cronoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  cronoImage: {
    width: 200,
    height: 200,
  },
  timer: {
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  btnArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    padding: 10,
  },
  btnButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  areaUltimo: {
    marginTop: 45,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  textCorrida: {
    fontSize: 20,
    color: "#000",
  },
  footer: {
    justifyContent: "flex-end",
  },
});

