// components/Dashboard/AchievementsRecentProducts.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AchievementsRecentProducts = () => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Achievements</Text>
          <Text style={styles.headerLink}>View All</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.contentText}>You haven't achieved any badges yet.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explore Badges</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Recent Products</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.contentText}>You have not tracked anything yet!</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Track Food</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  headerLink: {
    fontSize: 16,
    color: '#1e90ff',
  },
  contentBox: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1dd1a1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AchievementsRecentProducts;
