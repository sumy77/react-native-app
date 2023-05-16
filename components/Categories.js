import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {listCategories} from '../redux/actions/categoryActions';

const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category);
  useEffect(() => {
    dispatch(listCategories());
  }, []);
  const thumbnails = {
    shirts: require('../assets/shirt.png'),
    tshirts: require('../assets/tshirt.png'),
    jeans: require('../assets/jeans.png'),
  };
  const handleCategoryClick = category => {
    navigation.navigate('Products', category);
  };
  const categoryGrid = categories.map(category => {
    return (
      <TouchableOpacity
        key={category.name}
        onPress={() => handleCategoryClick(category)}>
        <View style={styles.categoryGrid}>
          <Image
            source={thumbnails[category.name.toLowerCase()]}
            style={styles.image}
          />
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
      </TouchableOpacity>
    );
  });
  return <View style={styles.container}>{categoryGrid}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'stretch',
  },
  categoryGrid: {},
  categoryName: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 600,
  },
});

export default Categories;
