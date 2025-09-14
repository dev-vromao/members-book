import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Dados mockados dos membros
const membersData = [
  {
    id: 1,
    name: "Bruno Sarcinelli",
    team: "Time Binary Three",
    category: "Comércio",
    avatar: require("../../assets/imgs/bruno-foto.jpeg"),
  },
  {
    id: 2,
    name: "Eloisa Pajehu",
    team: "Time Binary Three",
    category: "Comércio",
    avatar: null, // Usar placeholder
  },
  {
    id: 3,
    name: "Victor Santos",
    team: "Time Binary Three",
    category: "Comércio",
    avatar: null,
  },
  {
    id: 4,
    name: "Wander Miranda",
    team: "Enjoy Escola de Negócios",
    category: "Educação",
    avatar: null,
  },
];

// Função para agrupar membros por categoria
const groupMembersByCategory = (members: any[]) => {
  return members.reduce((acc, member) => {
    if (!acc[member.category]) {
      acc[member.category] = [];
    }
    acc[member.category].push(member);
    return acc;
  }, {});
};

export default function HomeScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState("Empresários");
  const groupedMembers = groupMembersByCategory(membersData);

  const handleMemberPress = (member: any) => {
    // Se for o Bruno, redireciona para o perfil
    if (member.name === "Bruno Sarcinelli") {
      navigation.navigate("Perfil");
    } else {
      // Para outros membros, você pode implementar navegação para perfil genérico
      console.log("Clicou em:", member.name);
      // Futuramente: navigation.navigate("MemberProfile", { memberId: member.id });
    }
  };

  const renderMemberItem = (member: any) => (
    <TouchableOpacity
      key={member.id}
      style={styles.memberItem}
      onPress={() => handleMemberPress(member)}
    >
      <View style={styles.memberInfo}>
        <View style={styles.avatarContainer}>
          {member.avatar ? (
            <Image source={member.avatar} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={20} color="#666" />
            </View>
          )}
        </View>
        <View style={styles.memberDetails}>
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.memberTeam}>{member.team}</Text>
          <Text style={styles.memberCategory}>{member.category}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#DAB377" />
    </TouchableOpacity>
  );

  const renderCategorySection = (category: string, members: any[]) => (
    <View key={category} style={styles.categorySection}>
      <Text style={styles.categoryTitle}>{category}</Text>
      {members.map(renderMemberItem)}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/imgs/enjoy-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.welcomeText}>
          <Text style={styles.greeting}>Boas vindas,</Text>
          <Text style={styles.userName}>Bruno Sarcinelli</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Empresários" && styles.activeTab]}
          onPress={() => setActiveTab("Empresários")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Empresários" && styles.activeTabText,
            ]}
          >
            Empresários
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Conquistas" && styles.activeTab]}
          onPress={() => setActiveTab("Conquistas")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Conquistas" && styles.activeTabText,
            ]}
          >
            Conquistas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Postagens" && styles.activeTab]}
          onPress={() => setActiveTab("Postagens")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Postagens" && styles.activeTabText,
            ]}
          >
            Postagens
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === "Empresários" &&
          Object.entries(groupedMembers).map(([category, members]) =>
            renderCategorySection(category, members as any[])
          )}

        {activeTab === "Conquistas" && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Nenhuma conquista encontrada
            </Text>
          </View>
        )}

        {activeTab === "Postagens" && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Nenhuma postagem encontrada
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 50, // Para compensar a status bar
  },
  logo: {
    width: 80,
    height: 60,
    marginRight: 12,
  },
  welcomeText: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    color: "#666",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#001A2A",
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#DAB377",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#DAB377",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  categorySection: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#001A2A",
    marginBottom: 12,
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  memberInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  memberDetails: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#001A2A",
    marginBottom: 2,
  },
  memberTeam: {
    fontSize: 12,
    color: "#666",
    marginBottom: 1,
  },
  memberCategory: {
    fontSize: 12,
    color: "#666",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#666",
  },
});
