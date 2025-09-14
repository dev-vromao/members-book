import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const allCategories = [
  "Advocacia",
  "Food",
  "Arquitetura",
  "Franquias",
  "Comércio",
  "Imobiliário",
  "Comex",
  "Licitação",
  "Construtora & Incorporadora",
  "Logística & Transporte",
  "Consultoria",
  "Marketing",
  "Contábil",
  "Recursos Humanos",
  "Educação",
  "Saúde",
  "Engenharia",
  "Seguros",
  "Eventos & Produções",
  "Finanças & Investimentos",
  "Veículos",
];

const memberTypes = ["Todos os membros", "Disruption", "Infinity", "Eternity"];

export default function MembersScreen({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Todos os membros");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filtra categorias pelo search e pelo tipo selecionado
  const filteredCategories = allCategories.filter(
    (cat) =>
      cat.toLowerCase().includes(search.toLowerCase()) &&
      (selectedType === "Todos os membros" || cat.includes(selectedType))
  );

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Image
          source={require("../../assets/imgs/enjoy-logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.header}>
            Boas vindas, {"\n"}
            <Text style={styles.name}>Bruno Sarcinelli</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.title}>Lista de membros</Text>

      {/* Campo de busca */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Digite sua busca"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
        <Ionicons name="search" size={18} color="gray" />
      </View>

      {/* Dropdown de filtro */}
      <View style={{ marginBottom: 16 }}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Text style={styles.dropdownText}>{selectedType}</Text>
          <Ionicons
            name={dropdownOpen ? "chevron-up" : "chevron-down"}
            size={18}
            color="#b8860b"
          />
        </TouchableOpacity>

        {dropdownOpen && (
          <View style={styles.dropdownList}>
            {memberTypes.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedType(type);
                  setDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Grid de categorias */}
      <FlatList
        data={filteredCategories}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 16, color: "gray" },
  name: { fontWeight: "bold", color: "#001A2A" },
  welcome: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#b8860b",
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  input: { flex: 1, padding: 8 },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#A9844E",
    padding: 12,
  },
  dropdownText: {
    flex: 1,
    textAlign: "center",
    color: "#b8860b",
    fontWeight: "500",
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: "#b8860b",
    borderRadius: 6,
    marginTop: 2,
    overflow: "hidden",
  },
  dropdownItem: {
    padding: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#b8860b",
  },
  dropdownItemText: { textAlign: "center", color: "#A9844E" },
  category: {
    flex: 1,
    backgroundColor: "#001A2B",
    margin: 6,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  categoryText: { color: "#A9844E", fontWeight: "600" },
  image: { width: 100, height: 80, borderRadius: 8, marginRight: 8 },
});
