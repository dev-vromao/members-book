import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
     

      {/* Avatar */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/imgs/bruno-foto.jpeg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Bruno Sarcinelli</Text>
        <Text style={styles.team}>Time Binary Three</Text>
        <Text style={styles.plan}>INFINITY</Text>
      </View>

      {/* Tipo de perfil */}
      <TouchableOpacity style={styles.profileType}>
        <Text style={styles.profileTypeText}>Tipo de perfil</Text>
        <Feather name="chevron-down" size={20} color="#333" />
      </TouchableOpacity>

      {/* Estatísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>30</Text>
          <Text style={styles.statLabel}>Negócios fechados</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>120.000,00</Text>
          <Text style={styles.statLabel}>Valor total</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>10</Text>
          <Text style={styles.statLabel}>Indicações Recebidas</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>80.000,00</Text>
          <Text style={styles.statLabel}>Valor por indicação</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>30</Text>
          <Text style={styles.statLabel}>Indicações Fornecidas</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>700.000,00</Text>
          <Text style={styles.statLabel}>Valor total acumulado</Text>
        </View>
      </View>

      {/* Recomendação */}
      <View style={styles.recommendation}>
        <Text style={styles.recommendationLabel}>Recomendação</Text>
        <Text style={styles.recommendationValue}>Diamante</Text>
      </View>

      {/* Bio */}
      <Text style={styles.bio}>
        Sou UX/UI Designer atuando no segmento de desenvolvimento de software,
        com foco em criar experiências digitais intuitivas e funcionais. Nos
        meus hobbies, cultivo a paixão por arte, jogos, animes e desenvolvimento
        de jogos, o que contribui para uma visão criativa e multidisciplinar no
        meu trabalho.
      </Text>

      {/* Ícones sociais */}
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="instagram" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="linkedin" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Entypo name="mail" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  customHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  team: {
    fontSize: 14,
    color: "#555",
  },
  plan: {
    fontSize: 16,
    color: "#B8860B",
    fontWeight: "600",
    marginTop: 4,
  },
  profileType: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    justifyContent: "space-between",
    marginVertical: 16,
    borderColor: "#ccc",
  },
  profileTypeText: {
    fontSize: 16,
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statBox: {
    width: "48%",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  recommendation: {
    backgroundColor: "#e0f7fa",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  recommendationLabel: {
    fontSize: 14,
    color: "#555",
  },
  recommendationValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00796B",
  },
  bio: {
    marginTop: 16,
    fontSize: 14,
    color: "#333",
    textAlign: "justify",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 40,
  },
  iconButton: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 8,
  },
});
