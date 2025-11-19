
/*
3. Password Field Customization

#secureTextEntry
This is a boolean type customization that obscures the text input if it is set to 'true'. It is used for sensitive text like passwords. The default value is false. 

In this example, we will set secureTextEntry={true} because we would like the password to be obscure.
*/

      <TextInput 
        style={styles.input}
        placeholder ='Enter Password'
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

/*
#autoComplete
We will also set autoCompleteType='password' for the password field.
*/

      <TextInput 
        style={styles.input}
        placeholder ='Enter Password'
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCompleteType='password'
      />

