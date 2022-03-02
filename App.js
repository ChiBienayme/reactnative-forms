import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Switch, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToogle] = useState(false);

	const handleToggle = () => {
		setToogle((prev) => !prev);
	};

	const handleSubmit = () => {
		// vérifier le form
		// l'envoyer au serveur
		// récupérer le token de connexion
		// navigate
	};

  const handleSubmit = () => {                       
   
 }
	return (
		<SafeAreaView style={styles.container}>
			<View>
        <TextInput style={styles.input}  
          placeholder="Your email"
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput style={styles.input} 
          placeholder="Your password"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />

        <View style={styles.remember} >
          <Text>Remember me? </Text>
          <Switch value={toggle} onValueChange={handleToggle} />
        </View>
        
        <TouchableOpacity style={styles.submit} 
          onPress={handleSubmit}>
          <Text style={styles.send}>Send</Text>
        </TouchableOpacity>
      </View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: "#fff",
    margin: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: 'center',
	},
  input: {
      borderWidth: 1,
      width: 200,
      padding: 5,
      borderRadius: 5,
      borderColor: "lightgrey",
      marginTop: 10,
  }, 
  remember: {
    marginTop: 10,
  },
  submit: {
      borderWidth: 1, 
      borderColor: "lightgrey",
      backgroundColor: "blue",
      width: 80,
      marginTop: 10,
  },
  send: {
    color: "white",
    textAlign: "center",
  }

});