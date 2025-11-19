/*
1. # NameFieldCustomization.js

#autoCapitalize
This is an enum-type customization that instructs textInput to automatically capitalize specified characters. To auto-capitalize: 
all characters set autoCapitalize='characters', 
the first letter of each word set autoCapitalize='words', 
the first letter of each sentence set autoCapitalize='sentences' (this is the default setting for react native) 
and none of the input, set autoCapitalize='none'.

In this example, we will set autoCapitalize='words' in the name field, because we want the first letter of each name to be capitalized. */

  <TextInput
    style={styles.input}
    placeholder='Full Name'
    onChangeText={(text) => setName(text)}
    value={name}
    autoCapitalize='words'
  />

//Note that this property is not supported by some keyboard types such as name-phone-pad.


/*
#autoCorrect
This is a Boolean type customization that enables or disables auto-correct. By default value, react native enables auto-correct. 

In this example, we will set autoCorrect={false} to disable auto-correct for the name field. */

  <TextInput
    style={styles.input}
    placeholder='Full Name'
    onChangeText={(text) => setName(text)}
    value={name}
    autoCorrect={false}
      />


