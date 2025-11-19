/*
2. Email Field Customization

#autoComplete
This enum type customization gives the system autocomplete hints so it can provide autofill. To disable autocomplete, set autoComplete='off'. We can set autoComplete using alot of values like: additional-name, country, current-password, email etc.

In this example, we will set autoCompleteType="email"
*/

  <TextInput 
    style={styles.input}
    placeholder ='Enter Email'
    onChangeText={text => setEmail(text)}
    value={email}
    autoCompleteType="email"
  />

/*
#keyboardType
This is an enum type customization that determines which keyboard would be opened. The following values work across platforms: default, number-pad, decimal-pad, numeric, email-address, phone-pad and url.

In this example, we will set keyboardType='email-address' because the user would enter an email address.
*/

  <TextInput 
    style={styles.input}
    placeholder ='Enter Email'
    onChangeText={text => setEmail(text)}
    value={email}
    keyboardType='email-address'
  />


