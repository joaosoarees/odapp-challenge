import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import api from '../services/api';


function Main () {
    // Recebe os pacientes do banco de dados
    const [pacientes, setPacientes] = useState([]); 

    useEffect(() => {
        async function loadPacientes() {
          const response = await api.get('/pacientes');
    
          setPacientes(response.data);
        }
        
        loadPacientes();
      }, []);

    return (
    // corpo da página
    <>  
        <ScrollView>
        {pacientes.map(pacientes => (
            <View style={styles.container} key={pacientes._id}>
                <Text style={styles.pacienteNome}>Nome: {pacientes.nome}</Text>
                <Text style={styles.pacienteIdade}>Idade: {pacientes.idade}</Text>
                <Text style={styles.pacienteCidade}>Cidade: {pacientes.cidade}</Text>
                <Text style={styles.pacienteEstado}>Estado: {pacientes.estado}</Text>
            </View>
        ))}
        </ScrollView>
    </>
    );
};
// Estilização da página
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0e0e0',
        marginBottom: 5,
        marginTop: 0, 
    },

    pacienteNome: {
        fontWeight: 'bold',
        margin: 5,
        fontSize: 24,
        color: '#333',
    },

    pacienteIdade: {
        fontSize: 18,
        marginLeft: 5,
    },

    pacienteCidade: {
        fontSize: 18,
        marginLeft: 5,
    },

    pacienteEstado: {
        fontSize: 18,
        marginLeft: 5,
    },


});

export default Main;