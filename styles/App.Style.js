import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    searchInputContainer: {
      flex: .1,
      padding: 2,
      margin: 3,
      justifyContent: "center",
      borderWidth: 3
    },
    searchInput: {
      margin: 1,
      borderWidth: 1
    },
    contactListContainer: {
      flex: .8,
      padding: 2,
      margin: 3,
      borderWidth: 3
    },
    contactListItem: {
      margin: 1,
      // justifyContent: "center",
      borderWidth: 1
    },    
    btnFlexRowContainer: {
      flexDirection: 'row',
      padding: 2,
      margin: 3,
      justifyContent: 'space-between',
      borderWidth: 3
    }
});
