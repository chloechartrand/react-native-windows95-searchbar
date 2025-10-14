import { SearchIcon } from '../src/icons/Search';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Panel, TextInput } from 'react95-native';

type Props = {
  query: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  placeholder?: string; 
};

export default function SearchBar95({
  query,
  onChange,
  onSubmit,
  placeholder = 'placeholder...', // default value
}: Props) {
  return (
    <Panel variant="raised" style={styles.panel}>
      <TextInput
        placeholder={placeholder}
        value={query}
        onChangeText={onChange}
        style={styles.input}
        onSubmitEditing={onSubmit}
      />
      <Button onPress={onSubmit} style={styles.button}>
        <SearchIcon size={16} />
      </Button>
    </Panel>
  );
}

const styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2,
    margin: 8,
  },
  input: {
    flex: 1,
    height: 32,
    paddingHorizontal: 8,
    fontFamily: 'ms_sans_serif',
  },
  button: {
    marginLeft: 4,
    height: 32,
    paddingHorizontal: 8,
  },
});
